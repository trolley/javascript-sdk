import { Configuration } from "./Configuration";
import { DownForMaintenance } from "./exceptions";
import * as types from "./types";

// tslint:disable:function-name
export class RecipientAccount {
  id: string = "";
  primary: boolean = false;
  currency: string = "";
  routeType?: string;
  recipientFees?: string;

  // paypal
  emailAddress?: string;

  // bank-transfer
  country?: string;
  type?: string;
  iban?: string;
  accountNum?: string;
  accountHolderName?: string;
  swiftBic?: string | null;
  branchId?: string;
  bankId?: string;
  bankName?: string;
  bankAddress?: string;
  bankCity?: string;
  bankRegionCode?: string;
  bankPostalCode?: string;

  /**
   * Retrieves the payout method based on the recipient id
   * @param {string} recipientId
   * @param {string} recipientAccountId
   */
  static async all(recipientId: string) {
    return Configuration.gateway().recipientAccount.all(
      recipientId,
    );
  }

  /**
   * Retrieves the payout method based on the recipient id
   * @param {string} recipientId
   * @param {string} recipientAccountId
   */
  static async find(recipientId: string, recipientAccountId: string) {
    return Configuration.gateway().recipientAccount.find(
      recipientId,
      recipientAccountId,
    );
  }

  /**
   * Creates a payout method based on the body and recipient id
   * @param {string} recipientId
   * @param {array} body
   */
  static async create(recipientId: string, body: any) {
    return Configuration.gateway().recipientAccount.create(
      recipientId,
      body,
    );
  }

  /**
   * Updates a payout method based on the body and the recipient id
   * @param {string} recipientId
   * @param {array} body
   * @param {string} recipientAccountId
   */
  static async update(
    recipientId: string,
    recipientAccountId: string,
    body: any,
  ) {
    return Configuration.gateway().recipientAccount.update(
      recipientId,
      recipientAccountId,
      body,
    );
  }

  /**
   * Delete a payout method based on the recipient id
   * @param {string} recipientId
   * @param {array} body
   * @param {string} recipientAccountId
   */
  static async remove(recipientId: string, recipientAccountId: string) {
    return Configuration.gateway().recipientAccount.remove(
      recipientId,
      recipientAccountId,
    );
  }

  static factory(account: types.Recipient.Account) {
    const instance = new RecipientAccount();
    instance._initialize(account);

    return instance;
  }

  private _initialize(account: types.Recipient.Account) {
    Object.keys(account).forEach(k => {
      (this as any)[k] = (account as any)[k];
    });
  }
}
