export class MyBadRequiesError extends Error {
  public statusCode = 403;
  constructor(message: string) {
    super(message);
    this.name = 'BadRequiest';
  }
}

export class MyInternalServerError extends Error {
  public statusCode = 500;
  constructor(message: string) {
    super(message);
    this.name = 'InternalServer';
  }
}
