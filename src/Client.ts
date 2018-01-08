"use strict";

import { Configuration } from "./Configuration";
import { Recipient } from "./Recipient";
import * as types from "../types";
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
     * @returns {The response}
     */
    async get<T>(endPoint: string): Promise<T> {

        const date: any = new Date();
        const timestamp = Math.round(date / 1000);
        const authoriation = this.generateAuthorization(timestamp, endPoint, "GET");
        const options = {
            uri: endPoint,
            baseUrl: this.config.getApiBase(),
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: authoriation,
                "X-PR-Timestamp": timestamp,
            },
        };

        return new Promise<T>((resolve, reject) => {
            request(options, (error: any, response: any, body: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });

    }
    /**
     * Makes an HTTP POST request to the API
     * @param {string} endPoint
     * @param {array} body
     * @returns {The response}
     */
    async post<T>(endPoint: string, payload: any): Promise<T> {
        const date: any = new Date();
        const timestamp = Math.round(date / 1000);
        const authoriation = this.generateAuthorization(timestamp, endPoint, "POST", payload);
        const options = {
            uri: this.config.getApiBase() + endPoint,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: authoriation,
                "X-PR-Timestamp": timestamp,
            },
            json: payload,
        };

        return new Promise<T>((resolve, reject) => {
            request(options, (error: any, response: any, body: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });
    }
    /**
     * Makes an HTTP PATCH request to the API
     * @param {string} endPoint
     * @param {array} body
     * @returns {The response}
     */
    async patch<T>(endPoint: string, payload: any): Promise<T> {
        const date: any = new Date();
        const timestamp = Math.round(date / 1000);
        const authoriation = this.generateAuthorization(timestamp, endPoint, "PATCH", payload);
        const options = {
            uri: endPoint,
            baseUrl: this.config.getApiBase(),
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: authoriation,
                "X-PR-Timestamp": timestamp,
            },
            json: payload,
        };

        return new Promise<T>((resolve, reject) => {
            request(options, (error: any, response: any, body: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });
    }
    /**
     * Makes an HTTP DELETE request to the API
     * @param {string} endPoint
     * @returns {The response}
     */
    async remove<T>(endPoint: string): Promise<T> {
        const date: any = new Date();
        const timestamp = Math.round(date / 1000);
        const authoriation = this.generateAuthorization(timestamp, endPoint, "DELETE");
        const options = {
            uri: endPoint,
            baseUrl: this.config.getApiBase(),
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: authoriation,
                "X-PR-Timestamp": timestamp,
            },
        };

        return new Promise<T>((resolve, reject) => {
            request(options, (error: any, response: any, body: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
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
    generateAuthorization(timestamp: number, endPoint: string, method: string, body: any = "") {
        if (body !== "") {
            body = JSON.stringify(body);
        }
        const message = `${timestamp}\n${method}\n${endPoint}\n${body}\n`;
        try {
            const hmac = crypto.createHmac("sha256", `${this.config.getApiSecret()}`);

            hmac.update(message);
            const signature = hmac.digest("hex");
            body = ""; //reset body ater each request since optional

            return `prsign ${this.config.getApiKey()}:${signature}`;
        } catch (typeError) {
            return "prsign 1:1";
        }
    }
}
