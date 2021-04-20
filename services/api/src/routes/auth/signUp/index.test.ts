import request from 'supertest';
import index from '../../../index';

test('signUp success', async () => {
  const testEmail = Math.random() * 10000 + 'test@q.q';
  const response = await request(index.callback()).post('/auth/signup').send({
    email: testEmail,
    password: 'qwer12',
  });
  expect(response.status).toBe(200);
  expect(response.body.user).toEqual(
    expect.objectContaining({ email: testEmail })
  );
});

test(`email is already exist`, async () => {
  const response = await request(index.callback()).post('/auth/signup').send({
    email: 'qwer@q.q',
    password: 'qwer12',
  });
  expect(response.status).toBe(400);
});

test(`invalid email`, async () => {
  const response = await request(index.callback()).post('/auth/signup').send({
    email: 'sdf',
    password: 'qwer12',
  });
  expect(response.status).toBe(400);
});

test(`invalid password`, async () => {
  const response = await request(index.callback()).post('/auth/signup').send({
    email: 'qwer@q.q',
    password: 'fd',
  });
  expect(response.status).toBe(400);
});
