import {ApiFactory, InvalidAttributeError} from "./ApiFactory";

export class PaymentFactory extends ApiFactory {
    private defaultAttrs =  {
        recipient: {
            id: undefined,
        },
        externalId: 'testPayment',
        amount: '10.00',
        currency: 'USD',
    };

    public async createResource(attrs: any = {}) {
        const body = { ...this.defaultAttrs, ...attrs.payment };

        if (!body.recipient.id) {
            throw new InvalidAttributeError('recipient.id is required');
        } else if (!attrs.batch || !attrs.batch.id) {
            throw new InvalidAttributeError('batch.id is required');
        } else {
            return this.apiClient.payment.create(attrs.batch.id, body);
        }
    }
}
