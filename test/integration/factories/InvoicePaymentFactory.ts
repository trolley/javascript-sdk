import { ApiFactory } from "./ApiFactory";

export class InvoicePaymentFactory extends ApiFactory {
  public async createResource(attrs: any = {}) {
    return this.apiClient.invoicePayment.create(attrs);
  }
}
