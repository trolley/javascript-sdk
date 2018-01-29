import { Gateway } from './Gateway';
import { Configuration, ConfigurationParams } from './Configuration';
export { Configuration };
export { Gateway } from './Gateway';
export { Recipient } from './Recipient';
export { RecipientAccount } from './RecipientAccount';
export { Balance } from './Balance';
export { Batch } from './Batch';
export { Payment } from './Payment';

export function connect(config: ConfigurationParams) {
  return new Gateway(new Configuration(config));
}

export default connect;
