export interface IResponse<T> {
  status: number;
  message?: string;
  body?: T;
}
