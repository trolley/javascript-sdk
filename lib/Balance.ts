import { Configuration } from "./Configuration";
import * as types from "./types";

/**
 * Balance information for a given account type and/or currency
 * @name Balance
 */
// tslint:disable:function-name
export class Balance {
  primary: boolean = false;
  amount: string = "0.00";
  currency: string = "";
  type: string = "";
  accountNumber: string = "";

  /**
   * Retrieves the balance based on the api key
   * @param {string} term
   * @hidden
   */
  static async all() {
    return Configuration.gateway().balances.all();
  }

  /**
   * Retrieves the balance based on the api key
   * @param {string} term
   * @hidden
   */
  static async find(term: "paypal" | "paymentrails") {
    return Configuration.gateway().balances.find(term);
  }

  /**
   * Construct a balance object from a response
   * @param balance
   * @hidden
   */
  static factory(balance: types.Balance.Balance) {
    const instance = new Balance();
    instance._initialize(balance);

    return instance;
  }

  /**
   * Construct a balance object from a response, implementation
   * @hidden
   */
  private _initialize(balance: types.Balance.Balance) {
    Object.keys(balance).forEach(k => {
      (this as any)[k] = (balance as any)[k];
    });
  }
}
