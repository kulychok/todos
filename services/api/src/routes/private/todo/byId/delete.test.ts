import agent from 'supertest-koa-agent';
import { app, server } from '../../../../index';
import db from '../../../../models';
import { generateAccessToken } from '../../../../helpers/jwtHandlers';
import { STATUS } from '../../../../constants/status';

const { User, Todo } = db;

describe('delete endpoint', () => {
  let userId = 1;
  const todoId = 1;
  let accessToken;

  beforeAll(async () => {
    agent(app);

    const todo = await Todo.findByPk(todoId);
    if (todo && todo.status === STATUS.DELETED) {
      await todo.update({ status: STATUS.ACTIVE });
    }

    const response = await User.findByPk(userId);
    const user = {
      userId: response.id,
      email: response.email,
    };
    accessToken = generateAccessToken(user);
  });

  it('should work properly', async (done) => {
    const deleteResponse = await agent(app)
      .delete(`/private/todo/${todoId}`)
      .set('Cookie', `accessToken=${accessToken}`)
      .send({});
    expect(deleteResponse.status).toBe(200);

    const getResponse = await agent(app)
      .get(`/private/todo/${todoId}`)
      .set('Cookie', `accessToken=${accessToken}`);
    expect(getResponse.status).toBe(404);

    done();
  });

  it('should return 401', async (done) => {
    const response = await agent(app).delete(`/private/todo/${todoId}`);
    expect(response.status).toBe(401);

    done();
  });

  afterAll(() => {
    server.close();
  });
});
