import { Configuration } from "./Configuration";
import { Recipient } from "./Recipient";
import * as crypto from "crypto";
import * as request from "request";

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
    const authoriation = this.generateAuthorization(timestamp, endPoint, "GET");
    const options = {
      uri: endPoint,
      baseUrl: this.config.apiBase,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authoriation,
        "X-PR-Timestamp": timestamp,
      },
    };

    return new Promise<T>((resolve, reject) => {
      request(options, (error: any, response: any, responseBody: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(responseBody) as T);
        }
      });
    });
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
      },
      body,
    };

    return new Promise<T>((resolve, reject) => {
      request(options, (error: any, response: any, responseBody: any) => {
        if (error) {
          reject(error);
        } else {
          try {
            resolve(JSON.parse(responseBody) as T);
          } catch (err) {
            reject(err);
          }
        }
      });
    });
  }
  /**
   * Makes an HTTP PATCH request to the API
   * @param {string} endPoint
   * @param {array} body
   */
  async patch<T>(endPoint: string, payload: any): Promise<T> {
    const date: any = new Date();
    const timestamp = Math.round(date / 1000);
    const body = JSON.stringify(payload);
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
      },
      body,
    };

    return new Promise<T>((resolve, reject) => {
      request(options, (error: any, response: any, responseBody: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(responseBody) as T);
        }
      });
    });
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
      },
    };

    return new Promise<T>((resolve, reject) => {
      request(options, (error: any, response: any, responseBody: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(JSON.parse(responseBody) as T);
        }
      });
    });
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
