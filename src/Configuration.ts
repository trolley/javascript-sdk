import { Gateway } from './Gateway';

let apiKey: string;
let apiSecret: string;
let apiBase: string = "http://api.local.dev:3000";

export class Configuration {

    static setApiKey(newApiKey: string) {
        apiKey = newApiKey;
    }
    static setApiSecret(newApiSecret: string) {
        apiSecret = newApiSecret;
    }
    static getApiKey() {
        return apiKey;
    }
    static getApiSecret() {
        return apiSecret;
    }
    static gateway() {
        return new Gateway(this);
    }
    static getApiBase() {
        return apiBase;
    }
    static setApiBase(newApiBase: string) {
        apiBase = newApiBase;
    }

    static setEnviroment(enviroment: string) {

        switch (enviroment) {
            case "integration":
                Configuration.setApiBase("http://api.local.dev:3000");
                break;
            case "development":
                Configuration.setApiBase("http://api.railz.io");
                break;
            case "production":
                Configuration.setApiBase("https://api.paymentrails.com");
                break;
            default:
                Configuration.setApiBase("https://api.paymentrails.com");

        }
    }
    setApiBase(newApiBase: string) {
        apiBase = newApiBase;
    }
    getApiBase() {
        return apiBase;
    }

    getApiSecret() {
        return apiSecret;
    }
    setApiSecret(newApiSecret: string) {
        apiSecret = newApiSecret;
    }
    getApiKey() {
        return apiKey;
    }
    setApiKey(newApiKey: string) {
        apiKey = newApiKey;
    }

}
