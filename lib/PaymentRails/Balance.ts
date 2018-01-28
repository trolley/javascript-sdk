import { Configuration } from "./Configuration";
import { DownForMaintenance } from "./exceptions";
import * as types from "../types";

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
   */
  static async all() {
    return Configuration.gateway().balance.all();
  }

  /**
   * Retrieves the balance based on the api key
   * @param {string} term
   */
  static async find(term: string) {
    return Configuration.gateway().balance.find(term);
  }

  static factory(balance: types.Balance.Balance) {
    const instance = new Balance();
    instance._initialize(balance);

    return instance;
  }

  private _initialize(balance: types.Balance.Balance) {
    Object.keys(balance).forEach(k => {
      (this as any)[k] = (balance as any)[k];
    });
  }
}
