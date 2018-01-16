import { Configuration } from '../src/Configuration';
import * as types from "../types";
export class Balances { // tslint:disable no-stateless-class

    /**
     * Retrieves the balance based on the api key
     * @param {string} term
     */
    static async find(term = "") {
        const data = await Configuration.gateway().balances.find(term);
        const jsonObj: any = JSON.parse(data.toString());

        return <types.Balance.Result>jsonObj;
    }
}
