import { Gateway } from "./Gateway";

export interface ConfigurationParams {
  key: string;
  secret: string;
  environment?: string;
}

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
  constructor(config?: ConfigurationParams) {
    this.apiKey = (config && config.key) || Configuration.apiKeyDefault;
    this.apiSecret = (config && config.secret) || Configuration.apiSecretDefault;
    if (config && config.environment) {
      this.apiBase = Configuration.environmentToUrl(config.environment);
    } else {
      this.apiBase = Configuration.apiBaseDefault;
    }
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
  static setEnvironment(environment: "production" | "sandbox" | "integration") {
    Configuration.apiBaseDefault = Configuration.environmentToUrl(environment);
  }

  /**
   * Private method that converts an environment to a specific URL
   * @param environment "production" | "sandbox" | "development"
   */
  private static environmentToUrl(environment: string) {
    switch (environment) {
      case "integration":
        // tslint:disable-next-line:no-http-string
        return "http://api.local.dev:3000";
      case "development":
        // tslint:disable-next-line:no-http-string
        return "http://api.railz.io";
      case "sandbox":
        return "https://api.paymentrails.com";
      case "production":
        return "https://api.paymentrails.com";
      default:
        return "https://api.paymentrails.com";
    }
  }
}
