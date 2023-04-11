import { Gateway } from "./Gateway";

export interface ConfigurationParams {
  /**
   * The Trolley access key
   */
  key: string;
  /**
   * The Trolley secret key
   */
  secret: string;
  /**
   * Optional. The base URL to use to connect to the API gateway. Useful while running from source.
   */
  apiBase?: string;
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
    this.apiSecret = (config && config.secret) || Configuration.apiSecretDefault;
    this.apiBase = (config && config.apiBase) || Configuration.apiBaseDefault;
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
}
