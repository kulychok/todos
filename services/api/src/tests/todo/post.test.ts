import agent from 'supertest-koa-agent';
import { app, server } from '../../index';
import db from '../../models';
import { generateAccessToken } from '../../helpers/jwtHandlers';
import STATUS from '../../constants/todo';

const { User, Todo } = db;

describe('postTodo endpoint', () => {
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

  it('adding title and status should work properly', async (done) => {
    const title = 'add todo test';
    const response = await agent(app)
      .post(`/private/todo`)
      .set('Cookie', `accessToken=${accessToken}`)
      .send({ title, status: STATUS.COMPLETED });
    expect(response.status).toBe(200);

    const todo = await Todo.findOne({
      where: { title, status: STATUS.COMPLETED },
    });

    if (todo) {
      todo.destroy();
    } else {
      console.error(`todo don't added`);
    }

    done();
  });

  it('adding only title should work properly', async (done) => {
    const title = 'add todo test';
    const response = await agent(app)
      .post(`/private/todo`)
      .set('Cookie', `accessToken=${accessToken}`)
      .send({ title });
    expect(response.status).toBe(200);

    const todo = await Todo.findOne({
      where: { title },
    });

    if (todo) {
      todo.destroy();
    } else {
      console.error(`todo don't added`);
    }

    done();
  });

  it('should return 401', async (done) => {
    const response = await agent(app).get(`/private/todo`);
    expect(response.status).toBe(401);

    done();
  });

  afterAll(() => {
    server.close();
  });
});
