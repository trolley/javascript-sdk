import { Gateway } from "./Gateway";

// tslint:disable:function-name
export class Configuration {
  static apiKeyDefault: string;
  static apiSecretDefault: string;
  static apiBaseDefault: string = "https://api.paymentrails.com";

  apiKey: string;
  apiSecret: string;
  apiBase: string;

  constructor() {
    this.apiKey = Configuration.apiKeyDefault;
    this.apiSecret = Configuration.apiSecretDefault;
    this.apiBase = Configuration.apiBaseDefault;
  }

  static setApiKey(newApiKey: string) {
    Configuration.apiKeyDefault = newApiKey;
  }

  static setApiSecret(newApiSecret: string) {
    Configuration.apiSecretDefault = newApiSecret;
  }

  static gateway() {
    const config = new Configuration();

    return new Gateway(config);
  }

  static setApiBase(newApiBase: string) {
    Configuration.apiBaseDefault = newApiBase;
  }

  static setEnvironment(enviroment: string) {
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

  getApiKey() {
    return this.apiKey;
  }

  getApiSecret() {
    return this.apiSecret;
  }

  getApiBase() {
    return this.apiBase;
  }
}
