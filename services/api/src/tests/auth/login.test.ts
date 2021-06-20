import agent from 'supertest-koa-agent';
import { app, server } from '../../index';
import db from '../../models';

const { User } = db;

describe('logIn endpoint', () => {
  beforeAll(async () => {
    agent(app);
  });

  it('should work properly', async (done) => {
    const email = 'test@test.test';
    const password = 'test12';
    const response = await agent(app)
      .post(`/auth/login`)
      .send({ email, password });
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({ user: { id: 1, email } })
    );

    done();
  });

  it('should return error - user is not defined', async (done) => {
    const response = await agent(app)
      .post(`/auth/login`)
      .send({ email: 'uygfyusgryeugfdfgw32ds2@QFSDF.q', password: 'qwer12' });
    expect(response.status).toBe(400);

    done();
  });

  it('should return error - wrong email', async (done) => {
    const response = await agent(app)
      .post(`/auth/login`)
      .send({ email: 'werdf32', password: 'qwer12' });
    expect(response.status).toBe(400);

    done();
  });

  it('should return error - wrong password', async (done) => {
    const response = await agent(app)
      .post(`/auth/login`)
      .send({ email: 'qwerdsf@q.qqq', password: 'r2' });
    expect(response.status).toBe(400);

    done();
  });

  afterAll(() => {
    server.close();
  });
});
