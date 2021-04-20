import request from 'supertest';
import index from '../../../../index';

describe('ASDASD', () => {
  let userId = 1;
  let accessToken;

  beforeAll(() => {
    agent(connection);
    db.connection();

    const user = User.findByKey(userId);
    accessToken = signToken(user);
  });

  it('should work properly', async () => {
    const response = await request(index.callback())
      .get('/private/todo/1')
      .set('Cookie', `accessToken=${accessToken}`);

    expect(response.status).toBe(200);
  });

  it('should work properly', async () => {
    const response = await request(index.callback())
      .get('/private/todo/1')
      .set('Cookie', `accessToken=asdasdasdadasd`);

    expect(response.status).toBe(401);
  });

  it('should work properly', async () => {
    const response = await request(index.callback())
      .get('/private/todo/2')
      .set('Cookie', `accessToken=asdasdasdadasd`);

    expect(response.status).toBe(400);
  });

  beforeAll(() => {
    agent.close();
    connection.close();
  });
});

// test('deleteTodo success', async () => {
//   const response = await request(index.callback())
//     .delete('/private/todo/1')
//     .set(
//       'Cookie',
//       'refreshToken=$2b$12$I2Hgcs30Un6jE3iBjdxKQ.1wxiia7QaA7cMn8mktmv.gCpevUiOua; accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjk4LCJpYXQiOjE2MTg0MDA1MDgsImV4cCI6MTYxODQwNDEwOH0.o4q5-H-698ezQ3eqNNzjJe-2Ox7UXVA154CgmcHj7oI'
//     );
//   expect(response.status).toBe(200);
// });

// test('getTodo success', async () => {});

// test('editTodo success', async () => {
//   const response = await request(index.callback())
//     .patch('/private/todo/1')
//     .set(
//       'Cookie',
//       'refreshToken=$2b$12$I2Hgcs30Un6jE3iBjdxKQ.1wxiia7QaA7cMn8mktmv.gCpevUiOua; accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjk4LCJpYXQiOjE2MTg0MDA1MDgsImV4cCI6MTYxODQwNDEwOH0.o4q5-H-698ezQ3eqNNzjJe-2Ox7UXVA154CgmcHj7oI'
//     );
//   expect(response.status).toBe(200);
// });
