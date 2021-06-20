import jwt from 'jsonwebtoken';
const config = require('../config');

interface TokenPayload {
  userId: number;
}

const generateAccessToken = (data: TokenPayload): string => {
  return jwt.sign(data, config.jwt.secret, config.jwt.options);
};

const verifyJWT = (token: string): TokenPayload => {
  return jwt.verify(token, config.jwt.secret);
};

export { verifyJWT, generateAccessToken };
