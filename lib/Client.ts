import { Configuration } from "./Configuration";
import { Recipient } from "./Recipient";
import * as crypto from "crypto";
import * as request from "request";
import { Exceptions } from './exceptions';

/**
 * Private function to handle URL requests and standard responses
 * @param options The request to pass to the request library
 * @hidden
 */
function sendRequest<T>(options: request.UriOptions) {
  return new Promise<T>((resolve, reject) => {
    // tslint:disable-next-line:cyclomatic-complexity
    request(options, (error: any, response: request.RequestResponse, responseBody: any) => {
      if (error) {
        reject(new Exceptions.ServerError(String(error)));
      } else {
        try {
          const data = JSON.parse(responseBody);

          if (response.statusCode === 200) {
            resolve(data as T);

            return;
          }

          const firstErr = (data.errors && Array.isArray(data.errors) && data.errors.length !== 0) ? data.errors[0] : undefined;
          switch (response.statusCode) {
            case 400:
              const message = firstErr.code === "invalid_field" ? `${firstErr.message}: ${firstErr.field}` : firstErr.message;
              reject(new Exceptions.Malformed(message || "Not Found"));

              return;
            case 401:
              reject(new Exceptions.Authentication(firstErr.message || "Not Found"));

              return;
            case 403:
              reject(new Exceptions.Authorization(firstErr.message || "Not Found"));

              return;
            case 404:
              reject(new Exceptions.Authorization(firstErr.message || "Not Found"));

              return;
            case 500:
              reject(new Exceptions.ServerError(firstErr.message || "Not Found"));

              return;
            case 503:
              reject(new Exceptions.DownForMaintenance(firstErr.message || "Not Found"));

              return;
            default:
              reject(new Exceptions.Unexpected(`Unexpected HTTP_RESPONSE #${response.statusCode}`));
          }
        } catch (err) {
          reject(new Exceptions.Unexpected(String(err)));
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
        "Content-Type": "application/json",
        Authorization: authorization,
        "X-PR-Timestamp": timestamp,
        "Trolley-Source": "javascript-sdk_0.12.0",
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
        "Content-Type": "application/json",
        Authorization: authoriation,
        "X-PR-Timestamp": timestamp,
        "Trolley-Source": "javascript-sdk_0.12.0",
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
        "Trolley-Source": "javascript-sdk_0.12.0",
      },
      body,
    };

    return sendRequest<T>(options);
  }
  /**
   * Makes an HTTP DELETE request to the API
   * @param {string} endPoint
   */
  async remove<T>(endPoint: string): Promise<T> {
    const date: any = new Date();
    const timestamp = Math.round(date / 1000);
    const authoriation = this.generateAuthorization(
      timestamp,
      endPoint,
      "DELETE",
    );
    const options = {
      uri: endPoint,
      baseUrl: this.config.apiBase,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: authoriation,
        "X-PR-Timestamp": timestamp,
        "Trolley-Source": "javascript-sdk_0.12.0",
      },
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
