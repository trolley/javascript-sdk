// tslint:disable:max-classes-per-file

export class BaseException extends Error {
}

export class DownForMaintenance extends BaseException {
}

export class ServerError extends BaseException {
}

export class Unexpected extends BaseException {
}

export class NotFound extends BaseException {
}

export class Authentication extends BaseException {
}

export class Authorization extends BaseException {
}

export class Malformed extends BaseException {
}
