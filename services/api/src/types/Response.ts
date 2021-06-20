import { ParameterizedContext } from 'koa';

export type Response<T> = Promise<ParameterizedContext<T> | void>;
