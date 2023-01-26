import { Gateway } from "./Gateway";

export interface ConfigurationParams {
  /**
   * The Trolley public key
   */
  key: string;
  /**
   * The Trolley private key
   */
  secret: string;
  /**
   * The environment that you're using, most likely one of "production" or "sandbox"
   */
  environment?: "production" | "sandbox" | "integration" | "development";
}

// tslint:disable:function-name
export class Configuration {
  /**
   * @hidden
   */
  static apiKeyDefault: string;
  /**
   * @hidden
   */
  static apiSecretDefault: string;
  /**
   * @hidden
   */
  static apiBaseDefault: string = "https://api.trolley.com";

  apiKey: string;
  apiSecret: string;
  apiBase: string;

  /**
   * Internal constructor
   * @hidden
   */
  constructor(config?: ConfigurationParams) {
    this.apiKey = (config && config.key) || Configuration.apiKeyDefault;
    this.apiSecret =
      (config && config.secret) || Configuration.apiSecretDefault;
    if (config && config.environment) {
      this.apiBase = Configuration.environmentToUrl(config.environment);
    } else {
      this.apiBase = Configuration.apiBaseDefault;
    }
  }

  /**
   * Globally set the public API key to connect to Trolley
   * @param key Your Trolley API public key
   */
  static setApiKey(key: string) {
    Configuration.apiKeyDefault = key;
  }

  /**
   * Globally set the secret API key to connect to Trolley
   * @param secret Your Trolley API secret Key
   */
  static setApiSecret(secret: string) {
    Configuration.apiSecretDefault = secret;
  }

  /**
   * Function to construct a gateway for this configuration
   * @hidden
   */
  static gateway() {
    const config = new Configuration();

    return new Gateway(config);
  }

  /**
   * Set the base URL to use to connect to the API gateway
   * @param baseUrl url root
   * @hidden
   */
  static setApiBase(baseUrl: string) {
    Configuration.apiBaseDefault = baseUrl;
  }

  /**
   * Set the Trolley API environment that your using
   * @param environment one of "production" or "sandbox"
   */
  static setEnvironment(environment: "production" | "sandbox" | "integration") {
    Configuration.apiBaseDefault = Configuration.environmentToUrl(environment);
  }

  /**
   * Private method that converts an environment to a specific URL
   * @param environment "production" | "sandbox"
   * @hidden
   */
  private static environmentToUrl(environment: string) {
    switch (environment) {
      case "integration":
        // tslint:disable-next-line:no-http-string
        return "http://api.local.dev:3000";
      case "sandbox":
        return "https://api.railz.io";
      case "production":
        return "https://api.trolley.com";
      default:
        return "https://api.trolley.com";
    }
  }
}
