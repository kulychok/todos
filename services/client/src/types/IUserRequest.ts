interface IUserRequest {
  status?: number;
  user: { id: number; email: string };
}

export default IUserRequest;
