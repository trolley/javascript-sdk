import { Gateway } from "./Gateway";

// tslint:disable:function-name
export class Configuration {
  static apiKeyDefault: string;
  static apiSecretDefault: string;
  static apiBaseDefault: string = "https://api.paymentrails.com";

  apiKey: string;
  apiSecret: string;
  apiBase: string;

  /**
   * Internal constructor
   */
  constructor() {
    this.apiKey = Configuration.apiKeyDefault;
    this.apiSecret = Configuration.apiSecretDefault;
    this.apiBase = Configuration.apiBaseDefault;
  }

  /**
   * Globally set the public API key to connect to Payment Rails
   * @param key Your Payment Rails API public key
   */
  static setApiKey(key: string) {
    Configuration.apiKeyDefault = key;
  }

  /**
   * Globally set the secret API key to connect to Payment Rails
   * @param secret Your Payment Rails API secret Key
   */
  static setApiSecret(secret: string) {
    Configuration.apiSecretDefault = secret;
  }

  /**
   * Function to construct a gateway for this configuration
   */
  static gateway() {
    const config = new Configuration();

    return new Gateway(config);
  }

  /**
   * Set the base URL to use to connect to the API gateway
   * @param baseUrl url root
   */
  static setApiBase(baseUrl: string) {
    Configuration.apiBaseDefault = baseUrl;
  }

  /**
   * Set the Payment Rails API environment that your using
   * @param environment one of "production" or "sandbox"
   */
  static setEnvironment(environment: string) {
    switch (environment) {
      case "integration":
        Configuration.setApiBase("http://api.local.dev:3000");
        break;
      case "development":
        Configuration.setApiBase("http://api.railz.io");
        break;
      case "sandbox":
        Configuration.setApiBase("https://api.paymentrails.com");
        break;
      case "production":
        Configuration.setApiBase("https://api.paymentrails.com");
        break;
      default:
        Configuration.setApiBase("https://api.paymentrails.com");
    }
  }
}
