const errorHandler = async (ctx: any, next: any): Promise<void> => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.status || 500;
    ctx.response.message = err.message;
  }
};

export default errorHandler;
