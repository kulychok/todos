import request from 'supertest';
import index from '../../../index';

test('logIn success', async () => {
  const response = await request(index.callback()).post('/auth/login').send({
    email: 'qwer@q.q',
    password: 'qwer12',
  });
  expect(response.status).toBe(200);
  expect(response.body.user).toEqual(
    expect.objectContaining({ email: 'qwer@q.q' })
  );
});

test(`email doesn't exist`, async () => {
  const response = await request(index.callback()).post('/auth/login').send({
    email: 'itoyityuiuyuyio@q.q',
    password: 'qwer12',
  });
  expect(response.status).toBe(400);
});

test(`invalid email`, async () => {
  const response = await request(index.callback()).post('/auth/login').send({
    email: 'sdf',
    password: 'qwer12',
  });
  expect(response.status).toBe(400);
});

test(`invalid password`, async () => {
  const response = await request(index.callback()).post('/auth/login').send({
    email: 'qwer@q.q',
    password: 'fd',
  });
  expect(response.status).toBe(400);
});
