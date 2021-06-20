import agent from 'supertest-koa-agent';
import { app, server } from '../../index';
import db from '../../models';

const { User } = db;

describe('signUp endpoint', () => {
  let definedUser;

  beforeAll(async () => {
    agent(app);

    definedUser = await User.create({
      email: 'defined@d.d',
      password: '123wqer',
    });
  });

  it('should work properly', async (done) => {
    const email = 'signuptest@q.q';
    const response = await agent(app)
      .post(`/auth/signup`)
      .send({ email, password: 'qwer12' });
    expect(response.status).toBe(200);

    const user = await User.findOne({ where: { email } });
    if (user) {
      user.destroy();
    } else {
      console.error(`user don't created`);
    }

    done();
  });

  it('should return error because user is already defined', async (done) => {
    const response = await agent(app)
      .post(`/auth/signup`)
      .send({ email: definedUser.email, password: 'qwer12' });
    expect(response.status).toBe(400);

    done();
  });

  it('should return error because wrong email', async (done) => {
    const response = await agent(app)
      .post(`/auth/signup`)
      .send({ email: 'werdf32', password: 'qwer12' });
    expect(response.status).toBe(400);

    done();
  });

  it('should return error because wrong password', async (done) => {
    const response = await agent(app)
      .post(`/auth/signup`)
      .send({ email: 'qwerdsf@q.qqq', password: 'r2' });
    expect(response.status).toBe(400);

    done();
  });

  afterAll(async () => {
    server.close();

    await definedUser.destroy();
  });
});
