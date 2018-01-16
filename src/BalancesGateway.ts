import { Configuration } from "./Configuration";
import { Gateway } from "./Gateway";
import * as types from "../types";

export class BalancesGateway {

    gateway: Gateway;
    config: Configuration;

    constructor(gateway: Gateway) {
        this.gateway = gateway;
        this.config = this.gateway.config;
    }

    find(term = "") {
        const endPoint = `/v1/profile/balances/${term}`;

        return this.gateway.client.get<types.Balance.Result>(endPoint);
    }
}
