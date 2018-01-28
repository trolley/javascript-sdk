import { Configuration } from "./Configuration";
import { RecipientAccount } from "./RecipientAccount";
import * as types from "./types";

// tslint:disable:function-name
export class Recipient {
  id: string = "";
  referenceId: string = "";
  email: string = "";
  name: string = "";
  lastName: string = "";
  firstName: string = "";
  type: string = "";
  taxType: null | string = "";
  status: string = "";
  language: string = "";
  complianceStatus: string = "";
  dob: null | string = "";
  passport: string = "";
  updatedAt: string = "";
  createdAt: string = "";
  address: {
    street1: string;
    street2: string;
    city: string;
    postalCode: string;
    country: string;
    region: string;
    phone: string;
    phoneValidated: boolean;
  } = {
    street1: "",
    street2: "",
    city: "",
    postalCode: "",
    country: "",
    region: "",
    phone: "",
    phoneValidated: false,
  };
  compliance: {
    status: string;
    checkedAt: string;
  } = { status: "", checkedAt: "" };
  gravatarUrl: string = "";

  governmentId: null | string = null;
  ssn: null | string = null;
  accounts: RecipientAccount[] = [];

  primaryCurrency: null | string = null;
  routeType: string | null = null;
  estimatedFees: string | null = null;

  static async all() {
    return true;
  }

  /**
   * Retrieves a recipient based on the recipient id given or
   * retrieves a list of payments or logs depending on the term
   * @param {string} recipientId
   * @param {string} term
   */
  static async find(recipientId: string) {
    return Configuration.gateway().recipient.find(recipientId);
  }

  /**
   * Creates a recipient based on the body given to the client
   * @param {array} body
   */
  static async create(body: any) {
    return Configuration.gateway().recipient.create(body);
  }

  /**
   * Updates a recipient based on the body given to the client
   * and the recipient id
   * @param {string} recipientId
   * @param {array} body
   */
  static async update(recipientId: string, body: any) {
    return Configuration.gateway().recipient.update(recipientId, body);
  }

  /**
   * Delete a recipient based on the recipient id
   * @param {string} recipientId
   */
  static async remove(recipientId: string) {
    return Configuration.gateway().recipient.remove(recipientId);
  }

  /**
   * List all recipients based on the recipient id and
   *  (optional) a given wildcard, page amount and page size
   * @param {int} page
   * @param {int} pageSize
   * @param {string} search
   */
  static async search(
    page: number = 1,
    pageSize: number = 10,
    term: string = "",
  ) {
    return Configuration.gateway().recipient.search(
      page,
      pageSize,
      term,
    );
  }

  /**
   * Should only be called by the Gateway
   */
  static factory(recipient: types.Recipient.Recipient) {
    const instance = new Recipient();
    instance._initialize(recipient);

    return instance;
  }

  private _initialize(recipient: types.Recipient.Recipient) {
    Object.keys(recipient).forEach(k => {
      if (k === "accounts") {
        this.accounts = recipient.accounts.map(a =>
          RecipientAccount.factory(a),
        );
      } else {
        (this as any)[k] = (recipient as any)[k];
      }
    });
  }
}
