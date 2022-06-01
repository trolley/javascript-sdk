import { Gateway } from "./Gateway";
import { Configuration, ConfigurationParams } from "./Configuration";
export { Configuration };
export { Gateway } from "./Gateway";
export { Recipient } from "./Recipient";
export { RecipientAccount } from "./RecipientAccount";
export { Balance } from "./Balance";
export { Batch } from "./Batch";
export { Payment } from "./Payment";
export { OfflinePayment } from "./OfflinePayment";
export { Invoice } from "./Invoice";

/**
 * Create a client for the Payment Rails JavasScript API
 * ```
 * const client = paymentrails.connect({
 *   key: "MY_PUBLIC_KEY",
 *   secret: "MY_PRIVATE_KEY",
 * });
 * ```
 * @param config The configuration parameters
 */
export function connect(config: ConfigurationParams) {
  return new Gateway(new Configuration(config));
}

export default connect;
