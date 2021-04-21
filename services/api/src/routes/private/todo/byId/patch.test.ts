import agent from 'supertest-koa-agent';
import { app, server } from '../../../../index';
import db from '../../../../models';
import { generateAccessToken } from '../../../../helpers/jwtHandlers';
import { STATUS } from '../../../../constants/status';

const { User, Todo } = db;

describe('patch endpoint', () => {
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

  it('patch title should work properly', async (done) => {
    const title = 'test';

    const patchResponse = await agent(app)
      .patch(`/private/todo/${todoId}`)
      .set('Cookie', `accessToken=${accessToken}`)
      .send({ title });
    expect(patchResponse.status).toBe(200);

    const getResponse = await agent(app)
      .get(`/private/todo/${todoId}`)
      .set('Cookie', `accessToken=${accessToken}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.title).toBe(title);

    done();
  });

  it('patch status should work properly', async (done) => {
    const patchResponse = await agent(app)
      .patch(`/private/todo/${todoId}`)
      .set('Cookie', `accessToken=${accessToken}`)
      .send({});
    expect(patchResponse.status).toBe(200);

    const getResponse = await agent(app)
      .get(`/private/todo/${todoId}`)
      .set('Cookie', `accessToken=${accessToken}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.status).toBe(STATUS.COMPLETED);

    done();
  });

  it('should return 401', async (done) => {
    const response = await agent(app).patch(`/private/todo/${todoId}`);
    expect(response.status).toBe(401);

    done();
  });

  afterAll(() => {
    server.close();
  });
});
