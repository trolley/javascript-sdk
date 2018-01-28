import { Configuration } from "./Configuration";
import { RecipientGateway } from "./RecipientGateway";
import { RecipientAccountGateway } from "./RecipientAccountGateway";
import { BatchGateway } from "./BatchGateway";
import { PaymentGateway } from "./PaymentGateway";
import { BalanceGateway } from "./BalanceGateway";
import { Client } from "./Client";

export class Gateway {
    config: Configuration;
    client: Client;
    recipient: RecipientGateway;
    batch: BatchGateway;
    recipientAccount: RecipientAccountGateway;
    balance: BalanceGateway;
    payment: PaymentGateway;

    constructor(config: Configuration) {
        this.config = config;
        this.client = new Client(config);
        this.recipient = new RecipientGateway(this);
        this.batch = new BatchGateway(this);
        this.recipientAccount = new RecipientAccountGateway(this);
        this.balance = new BalanceGateway(this);
        this.payment = new PaymentGateway(this);
    }
}
