import jwt = require('jsonwebtoken');

const generateAccessToken = (data: any): string => {
  return jwt.sign({ ...data }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
};

const verifyJWT = (token: string): { userId: number } => {
  return jwt.verify(token, process.env.TOKEN_SECRET);
};

export { verifyJWT, generateAccessToken };
