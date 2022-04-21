import { Configuration } from "./Configuration";
import { RecipientGateway } from "./RecipientGateway";
import { RecipientAccountGateway } from "./RecipientAccountGateway";
import { BatchGateway } from "./BatchGateway";
import { PaymentGateway } from "./PaymentGateway";
import { BalancesGateway } from "./BalancesGateway";
import { OfflinePaymentGateway } from "./OfflinePaymentGateway";
import { InvoiceGateway } from "./InvoiceGateway";
import { Client } from "./Client";
import { InvoiceLineGateway } from "./InvoiceLineGateway";

export class Gateway {
  config: Configuration;
  client: Client;
  recipient: RecipientGateway;
  batch: BatchGateway;
  recipientAccount: RecipientAccountGateway;
  balances: BalancesGateway;
  payment: PaymentGateway;
  offlinePayment: OfflinePaymentGateway;
  invoice: InvoiceGateway;
  invoiceLine: InvoiceLineGateway;

  /**
   * This should be called by the connect() method to setup a client gateway
   * @param config Configuration parameters
   * @hidden
   */
  constructor(config: Configuration) {
    this.config = config;
    this.client = new Client(config);
    this.recipient = new RecipientGateway(this);
    this.batch = new BatchGateway(this);
    this.recipientAccount = new RecipientAccountGateway(this);
    this.balances = new BalancesGateway(this);
    this.payment = new PaymentGateway(this);
    this.offlinePayment = new OfflinePaymentGateway(this);
    this.invoice = new InvoiceGateway(this);
    this.invoiceLine = new InvoiceLineGateway(this);
  }
}
