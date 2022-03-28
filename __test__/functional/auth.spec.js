import mongoose from 'mongoose';
import request from 'supertest';
import app from '../../server/app';
import baseUrl from '../utils/baseUrl';
import mock from '../utils/mocks';
import seeds from '../../server/db/seeders/seeds';
import authHelper from '../../server/helpers/auth';

beforeAll(async () => {
  await seeds.usersDeleteSeed();
  await seeds.userCreateSeed();

  authHelper.decode = jest.fn(() => {
    return {
      email: 'doejane@gmail.com',
      _id: '12345',
    };
  });
});

afterAll(async () => {
  jest.resetAllMocks();
  return mongoose.disconnect();
});

describe('REGISTER', () => {
  it.only('Should register a new user', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/register`)
      .send({ ...mock.register });

    const {
      status,
      token,
      user: { email },
      message,
    } = res.body;

    expect(res.statusCode).toEqual(200);
    expect(status).toBe(true);
    expect(token).toBeTruthy();
    expect(email).toEqual(mock.register.email);
    expect(message).toEqual('Registration successful');
  });

  it('Should not register user if email already exists', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/register`)
      .send({ ...mock.registerDupEmail });

    const { status, error } = res.body;
    expect(res.statusCode).toEqual(409);
    expect(status).toBe(false);
    expect(error).toEqual('A user with this email already exists.');
  });

  it('Should not register user if meter number is already in use', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/register`)
      .send({ ...mock.registerDupMeter });

    const { status, error } = res.body;
    expect(res.statusCode).toEqual(409);
    expect(status).toBe(false);
    expect(error).toEqual('A user with this meter number already exists.');
  });

  it('Should fail if email is not provided', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/login`)
      .send({
        meterNumber: '12345670',
        password: '12345678',
      });

    const { status, error } = res.body;
    expect(res.statusCode).toEqual(400);
    expect(status).toBe(false);
    expect(error).toEqual('email is required');
  });

  it('Should fail if password is not provided', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/register`)
      .send({
        email: 'pan@mail.com',
        meterNumber: '12345670',
      });

    const { status, error } = res.body;
    expect(res.statusCode).toEqual(400);
    expect(status).toBe(false);
    expect(error).toEqual('password is required');
  });
});

describe('LOGIN', () => {
  it('Should login a user', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/login`)
      .send({ ...mock.login });

    const {
      status,
      token,
      user: { email },
      message,
    } = res.body;

    expect(res.statusCode).toEqual(200);
    expect(status).toBe(true);
    expect(token).toBeTruthy();
    expect(email).toEqual(mock.login.email);
    expect(message).toEqual('Login successful');
  });

  it('Should not login user with an email that does not exist', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/login`)
      .send({
        email: 'missing@gmail.com',
        password: '12345678',
      });

    const { status, error } = res.body;
    expect(res.statusCode).toEqual(400);
    expect(status).toBe(false);
    expect(error).toEqual('User does not exist');
  });

  it('Should fail if password is not provided', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/login`)
      .send({
        ...mock.loginNoPassword,
      });

    const { status, error } = res.body;
    expect(res.statusCode).toEqual(400);
    expect(status).toBe(false);
    expect(error).toEqual('password is required');
  });

  it('Should fail if email is not provided', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/login`)
      .send({
        ...mock.loginNoEmail,
      });

    const { status, error } = res.body;
    expect(res.statusCode).toEqual(400);
    expect(status).toBe(false);
    expect(error).toEqual('email is required');
  });

  it('Should fail if password and email do not match', async () => {
    const res = await request(app)
      .post(`${baseUrl}/auth/login`)
      .send({
        ...mock.loginBad,
      });

    const { status, error } = res.body;
    expect(res.statusCode).toEqual(401);
    expect(status).toBe(false);
    expect(error).toEqual('Bad Login');
  });
});
