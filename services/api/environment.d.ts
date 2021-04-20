declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_PASSWORD: string;
      DB_USERNAME: string;
      DB_DIALECT: string;
      DB_PORT: string;
      NODE_ENV: string;
      TOKEN_SECRET: string;
      BCRYPT_SECRET: string;
    }
  }
}

export {};
