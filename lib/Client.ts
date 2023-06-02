import { Configuration } from "./Configuration";
import * as crypto from "crypto";
import * as request from "request";
import { Errors } from './errors';
import ValidationError = Errors.ValidationError;

/**
 * Private function to handle URL requests and standard responses
 * @param options The request to pass to the request library
 * @hidden
 */

const CURRENT_CLIENT_VERSION = "1.0.2";
const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  "Trolley-Source": `javascript-sdk_${CURRENT_CLIENT_VERSION}`,
};

function sendRequest<T>(options: request.UriOptions) {
  return new Promise<T>((resolve, reject) => {
    // tslint:disable-next-line:cyclomatic-complexity
    request(options, (error: any, response: request.RequestResponse, responseBody: any) => {
      if (error) {
        reject(new Errors.ServerError(String(error)));
      } else {
        try {
          const data = JSON.parse(responseBody);

          if (response.statusCode === 200) {
            resolve(data as T);
          } else {
            const validationErrors: ValidationError[] = data.errors.map((e: any) => {
              return {
                code: e.code,
                field: e.field,
                message: e.message,
              };
            });

            switch (response.statusCode) {
              case 400:
                reject(new Errors.MalformedError(validationErrors));
                break;
              case 401:
                reject(new Errors.AuthenticationError(validationErrors));
                break;
              case 403:
                reject(new Errors.AuthorizationError(validationErrors));
                break;
              case 404:
                reject(new Errors.NotFoundError(validationErrors));
                break;
              case 500:
                reject(new Errors.ServerError("Server error", validationErrors));
                break;
              case 503:
                reject(new Errors.DownForMaintenanceError(validationErrors));
                break;
              default:
                reject(new Errors.UnexpectedError(`Unexpected HTTP_RESPONSE #${response.statusCode}`, validationErrors));
            }
          }

          return;
        } catch (err) {
          reject(new Errors.UnexpectedError(String(err)));
        }
      }
    });
  });
}

/**
 * @hidden
 */
export class Client {
  config: Configuration;

  constructor(config: Configuration) {
    this.config = config;
  }

  /**
   * Makes an HTTP GET request to the API
   * @param {string} endPoint
   */
  async get<T>(endPoint: string): Promise<T> {
    const date: any = new Date();
    const timestamp = Math.round(date / 1000);
    const authorization = this.generateAuthorization(timestamp, endPoint, "GET");
    const options = {
      uri: endPoint,
      baseUrl: this.config.apiBase,
      method: "GET",
      headers: {
        ...DEFAULT_HEADERS,
        Authorization: authorization,
        "X-PR-Timestamp": timestamp,
      },
    };

    return sendRequest<T>(options);
  }

  /**
   * Makes an HTTP POST request to the API
   * @param {string} endPoint
   * @param {array} body
   */
  async post<T>(endPoint: string, payload?: any): Promise<T> {
    const date: any = new Date();
    const timestamp = Math.round(date / 1000);

    const body = payload === undefined ? "{}" : JSON.stringify(payload);
    const authoriation = this.generateAuthorization(
      timestamp,
      endPoint,
      "POST",
      body,
    );

    const options = {
      uri: this.config.apiBase + endPoint,
      method: "POST",
      headers: {
        ...DEFAULT_HEADERS,
        Authorization: authoriation,
        "X-PR-Timestamp": timestamp,
      },
      body,
    };

    return sendRequest<T>(options);
  }
  /**
   * Makes an HTTP PATCH request to the API
   * @param {string} endPoint
   * @param {array} body
   */
  async patch<T>(endPoint: string, payload: any): Promise<T> {
    const date: any = new Date();
    const timestamp = Math.round(date / 1000);
    const body = payload === undefined ? "{}" : JSON.stringify(payload);
    const authoriation = this.generateAuthorization(
      timestamp,
      endPoint,
      "PATCH",
      body,
    );
    const options = {
      uri: endPoint,
      baseUrl: this.config.apiBase,
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: authoriation,
        "X-PR-Timestamp": timestamp,
        "Trolley-Source": "javascript-sdk_0.11.1",
      },
      body,
    };

    return sendRequest<T>(options);
  }
  /**
   * Makes an HTTP DELETE request to the API
   * @param {string} endPoint
   * @param {array} ids
   */
  async remove<T>(endPoint: string, ids: string[] = []): Promise<T> {
    const date: any = new Date();
    const timestamp = Math.round(date / 1000);
    const body = ids.length === 0 ? "" : JSON.stringify({ ids: ids });
    const authorization = this.generateAuthorization(
      timestamp,
      endPoint,
      "DELETE",
      body,
    );

    const options = {
      uri: endPoint,
      baseUrl: this.config.apiBase,
      method: "DELETE",
      headers: {
        ...DEFAULT_HEADERS,
        Authorization: authorization,
        "X-PR-Timestamp": timestamp,
      },
      body,
    };

    return sendRequest<T>(options);
  }
  /**
   * Generates an authoriztion code
   * @param {string} timestamp
   * @param {string} endPoint
   * @param {string} method
   * @param {object} body (optional)
   */
  generateAuthorization(
    timestamp: number,
    endPoint: string,
    method: string,
    body: string = "",
  ) {
    try {
      const hmac = crypto.createHmac("sha256", `${this.config.apiSecret}`);

      hmac.update(`${timestamp}\n${method}\n${endPoint}\n${body}\n`);
      const signature = hmac.digest("hex");

      return `prsign ${this.config.apiKey}:${signature}`;
    } catch (typeError) {
      return "prsign 1:1";
    }
  }
}
