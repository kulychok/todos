import request from 'supertest';
import index from '../../../../index';

test('getActive success', async () => {
  const response = await request(index.callback())
    .get('/private/todo/active/?page=0')
    .set(
      'Cookie',
      'refreshToken=$2b$12$I2Hgcs30Un6jE3iBjdxKQ.1wxiia7QaA7cMn8mktmv.gCpevUiOua; accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjk4LCJpYXQiOjE2MTg0MDA1MDgsImV4cCI6MTYxODQwNDEwOH0.o4q5-H-698ezQ3eqNNzjJe-2Ox7UXVA154CgmcHj7oI'
    );

  expect(response.status).toBe(200);
});

test('getCompleted success', async () => {
  const response = await request(index.callback())
    .get('/private/todo/completed/?page=0')
    .set(
      'Cookie',
      'refreshToken=$2b$12$I2Hgcs30Un6jE3iBjdxKQ.1wxiia7QaA7cMn8mktmv.gCpevUiOua; accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjk4LCJpYXQiOjE2MTg0MDA1MDgsImV4cCI6MTYxODQwNDEwOH0.o4q5-H-698ezQ3eqNNzjJe-2Ox7UXVA154CgmcHj7oI'
    );
  expect(response.status).toBe(200);
});
