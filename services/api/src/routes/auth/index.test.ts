import request from 'supertest';
import index from '../../index';

test('getAcceccToken success', async () => {
  const response = await request(index.callback()).post('/auth/token').send({
    refreshToken:
      '$2b$12$I2Hgcs30Un6jE3iBjdxKQ.1wxiia7QaA7cMn8mktmv.gCpevUiOua',
  });
  expect(response.status).toBe(200);
});
