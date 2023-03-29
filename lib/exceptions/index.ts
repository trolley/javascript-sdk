// tslint:disable:max-classes-per-file

/**
 * @module exceptions
 */
export module Errors {
  export interface ApiError {
    code: string;
    field: string;
    message: string;
  }

  abstract class BaseError extends Error {
    public errors?: ApiError[];

    protected constructor(message: string, errors?: ApiError[]) {
      super(message);
      this.errors = errors;
    }
  }

  export class DownForMaintenanceError extends BaseError {
    public constructor(errors?: ApiError[]) {
      super("Down for maintenance", errors);
    }
  }

  export class ServerError extends BaseError {
    public constructor(message: string) {
      super("Server error");
    }
  }

  export class UnexpectedError extends BaseError {
    public constructor(message: string, errors?: ApiError[]) {
      super(message, errors);
    }
  }

  export class NotFoundError extends BaseError {
    public constructor(errors?: ApiError[]) {
      super("Not Found", errors);
    }
  }

  export class AuthenticationError extends BaseError {
    public constructor(errors?: ApiError[]) {
      super("Authentication failed", errors);
    }
  }

  export class AuthorizationError extends BaseError {
    public constructor(errors?: ApiError[]) {
      super("Authorization failed", errors);
    }
  }

  export class MalformedError extends BaseError {
    public constructor(errors?: ApiError[]) {
      super("Malformed request", errors);
    }
  }
}
