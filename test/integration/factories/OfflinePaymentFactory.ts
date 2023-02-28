import { ApiFactory } from "./ApiFactory";

export class OfflinePaymentFactory extends ApiFactory {
    defaultAttrs = {
        externalId: 'testOfflinePayment',
        taxReportable: false,
        amount: '10.00',
        currency: 'USD',
        withholdingAmount: '2.40',
        withholdingCurrency: 'USD',
    };

    public async createResource(attrs: any = {}) {
        return this.apiClient.offlinePayment.create(attrs.recipient.id, {
            ...this.defaultAttrs,
            ...attrs.offlinePayment,
        });
    }
}
