// tslint:disable:max-classes-per-file

/**
 * @module exceptions
 */
export module Errors {
  export interface ValidationError {
    code: string;
    field: string;
    message: string;
  }

  abstract class BaseError extends Error {
    public validationErrors?: ValidationError[];

    protected constructor(message: string, validationErrors?: ValidationError[]) {
      super(message);
      this.validationErrors = validationErrors;
    }
  }

  export class DownForMaintenanceError extends BaseError {
    public constructor(validationErrors?: ValidationError[]) {
      super("Down for maintenance", validationErrors);
    }
  }

  export class ServerError extends BaseError {
    public constructor(message: string = "Server error", validationErrors?: ValidationError[]) {
      super(message, validationErrors);
    }
  }

  export class UnexpectedError extends BaseError {
    public constructor(message: string, validationErrors?: ValidationError[]) {
      super(message, validationErrors);
    }
  }

  export class NotFoundError extends BaseError {
    public constructor(validationErrors?: ValidationError[]) {
      super("Not Found", validationErrors);
    }
  }

  export class AuthenticationError extends BaseError {
    public constructor(validationErrors?: ValidationError[]) {
      super("Authentication failed", validationErrors);
    }
  }

  export class AuthorizationError extends BaseError {
    public constructor(validationErrors?: ValidationError[]) {
      super("Authorization failed", validationErrors);
    }
  }

  export class MalformedError extends BaseError {
    public constructor(validationErrors?: ValidationError[]) {
      super("Malformed request", validationErrors);
    }
  }
}
