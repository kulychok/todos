import agent from 'supertest-koa-agent';
import { app, server } from '../../index';
import db from '../../models';

const { RefreshToken } = db;

describe('getAccessToken endpoint', () => {
  let refreshTokenId = 1;
  let refreshToken;

  beforeAll(async () => {
    agent(app);

    refreshToken = await RefreshToken.findByPk(refreshTokenId);
  });

  it('should work properly', async (done) => {
    const response = await agent(app)
      .post(`/auth/token`)
      .send({ refreshToken: refreshToken.refreshToken });
    expect(response.status).toBe(200);

    done();
  });

  afterAll(() => {
    server.close();
  });
});
