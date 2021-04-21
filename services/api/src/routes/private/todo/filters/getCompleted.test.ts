import agent from 'supertest-koa-agent';
import { app, server } from '../../../../index';
import db from '../../../../models';
import { generateAccessToken } from '../../../../helpers/jwtHandlers';
import { STATUS } from '../../../../constants/status';

const { User } = db;

describe('getCompleted endpoint', () => {
  let userId = 1;
  let accessToken;

  beforeAll(async () => {
    agent(app);

    const response = await User.findByPk(userId);
    const user = {
      userId: response.id,
      email: response.email,
    };
    accessToken = generateAccessToken(user);
  });

  it('should work properly', async (done) => {
    const response = await agent(app)
      .get(`/private/todo/completed`)
      .set('Cookie', `accessToken=${accessToken}`);
    expect(response.status).toBe(200);
    response.body.todoList.map((todo) => {
      expect(todo).toEqual(
        expect.objectContaining({ status: STATUS.COMPLETED })
      );
    });

    done();
  });

  it('should return 401', async (done) => {
    const response = await agent(app).get(`/private/todo/completed`);
    expect(response.status).toBe(401);

    done();
  });

  afterAll(() => {
    server.close();
  });
});
