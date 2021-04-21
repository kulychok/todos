import agent from 'supertest-koa-agent';
import { app, server } from '../../../index';
import db from '../../../models';
import { generateAccessToken } from '../../../helpers/jwtHandlers';

const { User } = db;

describe('getUser endpoint', () => {
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
      .get(`/private/user`)
      .set('Cookie', `accessToken=${accessToken}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 1,
        email: 'test@test.test',
      })
    );

    done();
  });

  it('should return 401', async (done) => {
    const response = await agent(app).get(`/private/user`);
    expect(response.status).toBe(401);

    done();
  });

  afterAll(() => {
    server.close();
  });
});
