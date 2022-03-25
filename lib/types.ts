/*
 *  General serializer types
 */

import { Invoice } from './invoice';

// tslint:disable:no-shadowed-variable
// tslint:disable:prefer-method-signature

/**
 * @hidden
 */
export namespace Serializer {
  export interface WithMeta {
    meta: {
      page: number;
      pages: number;
      records: number;
    };
  }

  export interface ListArg<T> {
    count: number;
    page: number;
    pageSize: number;
    rows: T[];
  }
}

/*
 ** accountActivity.ts
 */
/**
 * @hidden
 */
export namespace AccountActivity {
  export interface AccountActivity {
    type: string;
    details: string;
    amount: string;
    balance: string;
    date: string;

    transactionDate: string;
    transactionId: string;
    transactionType: string;
    batchId: string | null;
    paymentId: string | null;
    reconciledAt: string | null;
    externalId: string | null;
    postedAmount: string | null;
    pendingAmount: string | null;
  }

  export interface Result {
    activity: AccountActivity;
  }

  export interface ListResult {
    activities: AccountActivity[];
  }
}

/**
 * @hidden
 */
export namespace Balance {
  export interface Balance {
    primary: boolean;
    amount: string;
    currency: string;
    type: string;
    accountNumber: string;
    display: boolean;
  }

  export interface Result {
    ok: boolean;
    balance: Balance;
  }

  export interface ListResult {
    ok: boolean;
    balances: {
      [key: string]: Balance;
    };
  }
}

/**
 * @hidden
 */
export namespace Batch {
  export interface Batch {
    id: string;
    status: string;
    amount: string;
    totalPayments: number;
    currency: string;
    description: string;
    sentAt: string;
    completedAt: string;
    createdAt: string;
    updatedAt: string;
    payments?: Payment.ListResult;
    quoteExpiredAt?: string;
  }

  export interface Result {
    ok: boolean;
    batch: Batch;
  }

  export interface ListResult extends Serializer.WithMeta {
    ok: boolean;
    batches: Batch[];
  }
}

/**
 * @hidden
 */
export namespace BatchBalance {
  export interface BatchBalance {
    id: string;
    merchantBalances: {
      paymentRails: number;
      paypal: number;
    };
    fundsRequired: {
      paymentRails: number;
      paypal: number;
    };
    enoughFunds: boolean;
  }

  export type Result = BatchBalance;
}

/**
 * @hidden
 */
export namespace BatchSummary {
  export interface SummaryInfo {
    count: number;
    debitAmount: string;
    merchantFees: string;
    totalFees: string;
    sendingAmount: string;
  }

  interface BatchErrors {
    error: string;
    paymentId: number; // TODO: THis is useless, should be the GUID
  }

  export interface BatchSummary {
    detail: {
      [method: string]: SummaryInfo;
    };
    total: SummaryInfo;
  }

  export interface Result {
    ok: boolean;
    batchSummary: BatchSummary;
  }
}

/**
 * @hidden
 */
export namespace ComplianceCheck {
  /*
   ** compliance-check.ts
   */
  export interface ComplianceCheck {
    status: string;
    checkedAt: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface Result {
    complianceCheck: ComplianceCheck;
  }

  export interface ListResult extends Serializer.WithMeta {
    complianceChecks: ComplianceCheck[];
  }
}

/**
 * @hidden
 */
export namespace MerchantBankAccount {
  export interface MerchantBankAccount {
    currency: string;
    country: string;
    accountName: string;
    fileLink: string;
    completed: boolean;

    iban: string;
    accountNum: string;

    bankName: string;
    bankAddress: string;
    bankCity: string;
    bankPostalCode: string;
    bankRegion: string;
    enabled: boolean;
  }

  export type Result = MerchantBankAccount;

  export interface ListResult extends Serializer.WithMeta {
    records: MerchantBankAccount[];
  }
}

/**
 * @hidden
 */
export namespace Payment {
  export interface Payment {
    id: string;
    recipient: Recipient.Recipient;

    status: string;
    sourceAmount: string;
    exchangeRate: string;
    fees: string;
    recipientFees: string;
    returnedAmount: string;
    targetAmount: string;
    fxRate: string;
    memo: string;
    processedAt: string;
    createdAt: string;
    updatedAt: string;

    account: Recipient.Account | null;

    merchantFees: string;
    compliance: {
      status: string;
      checkedAt: string;
    };

    sourceCurrency: string | null;
    targetCurrency: string | null;
    isSupplyPayment: boolean;

    methodDisplay: string;
    payoutMethod: string;

    batch?: Batch.Batch;

    externalId: string;

    amount: string;
    currency: string | null;

    category: string | null;

    checkNumber: string | null;

    tags: string[];
    coverFees: boolean;
    estimatedDeliveryAt: string | null;
    // tax withholding data
    taxReportable: boolean;
    withholdingAmount: string;
    withholdingCurrency: string | null;

    settledAt: string | null;
    initiatedAt: string | null;
    returnedAt: string | null;

    returnedReason: string[] | null;
    returnedNote: string | null;

    failureMessage: string | null;
  }

  export interface Result {
    ok: boolean;
    payment: Payment;
  }

  export interface ListResult extends Serializer.WithMeta {
    ok: boolean;
    payments: Payment[];
  }
}

export namespace OfflinePayment {
  export interface OfflinePayment {
    id: string;

    recipientId: string;
    externalId: string | null;
    memo: string;
    tags: string[];
    taxReportable: boolean;
    category: string;
    amount: string;
    currency: string;
    withholdingAmount: string;
    withholdingCurrency: string;
    equivalentWithholdingAmount: string;
    equivalentWithholdingCurrency: string;

    processedAt: string;

    updatedAt: string;
    createdAt: string;
    deletedAt: string | null;
  }

  export interface Response {
    offlinePayment: OfflinePayment;
  }

  export interface ListResponse extends Serializer.WithMeta {
    offlinePayments: OfflinePayment[];
  }
}

export namespace InvoiceWrapper {
  export interface Result {
    ok: boolean;
    invoice: Invoice;
  }
}

/**
 * @hidden
 */
export namespace PaymentReason {
  export interface PaymentReason {
    code: string;
    country: string;
    reason: string;
  }

  export type Response = PaymentReason;

  export type ListResponse = {
    paymentReasons: PaymentReason[];
  };
}

/**
 * @hidden
 */
export namespace TaxForm {
  export interface TaxForm {
    id: string;
    kind: string;
    recipientId: string;
    reviewedAt: null | string;
    signed: null | string;
    signedAt: null | string;
    status: string;
    uploadURI: null | string;
    voidedAt: null | string;
    voidedBy: null | string;
  }

  export interface W9Form {
    personName: string;
    businessName: null | string;
    email: string;
    address: string;
    state: string;
    city: string;
    zip: string;
    taxId: string;
    taxType: string;
    idType: null | string;
    exemptReporting: null | string;
    exemptPayee: null | string;
  }

  export interface W8BENForm {
    personsName: null | string;
    organizationCountry: null | string;
    noUsCertification: null | string;
    taxPayerForeignId: null | string;
    taxPayerUsId: null | string;
    certificationDate: null | string;
    certificationEmail: null | string;
    certificationName: null | string;
    residenceAddress: null | string;
    residenceCity: null | string;
    residenceCountry: null | string;
    residencePostalCode: null | string;
    residenceRegion: null | string;
    mailingAddress: null | string;
    mailingCity: null | string;
    mailingCountry: null | string;
    mailingPostalCode: null | string;
    mailingRegion: null | string;
    treatyArticle: null | string;
    withholding: null | string;
  }

  export interface W8BENEForm {
    personsName: null | string;
    organizationName: null | string;
    organizationCountry: null | string;
    noUsCertification: null | string;
    taxPayerForeignId: null | string;
    taxPayerUsId: null | string;
    certificationDate: null | string;
    certificationEmail: null | string;
    certificationName: null | string;
    residenceAddress: null | string;
    residenceCity: null | string;
    residenceCountry: null | string;
    residencePostalCode: null | string;
    residenceRegion: null | string;
    mailingAddress: null | string;
    mailingCity: null | string;
    mailingCountry: null | string;
    mailingPostalCode: null | string;
    mailingRegion: null | string;
    isBeneficialOwnerCertified: null | string;
    beneficialOwnerHasLimitations: null | string;
    beneficialOwnerLimitationType: null | string;
    treatyArticle: null | string;
    withholding: null | string;
  }
}

/**
 * @hidden
 */
export namespace Recipient {
  /*
   **  recipient-payout-method.ts
   */
  export interface Recipient {
    id: string;
    referenceId: string;
    email: string;
    name: string;
    lastName: string;
    firstName: string;
    type: string;
    taxType: null | string;
    status: string;
    language: string;
    complianceStatus: string;
    dob: null | string;
    passport: string;
    updatedAt: string;
    createdAt: string;
    address: {
      street1: string;
      street2: string;
      city: string;
      postalCode: string;
      country: string;
      region: string;
      phone: string;
      phoneValidated: boolean;
    };
    compliance: {
      status: string;
      checkedAt: string;
    };
    gravatarUrl: string;

    governmentId: null | string;
    ssn: null | string;
    merchantId: string;
    accounts: Account[];

    primaryCurrency: null | string;
    payoutMethod?: string;

    payout: any;

    routeType: string | null;
    estimatedFees: string | null;
  }

  export interface RecipientPayoutMethod {
    autoswitch: {
      limit: number;
      active: boolean;
    };
    holdup: {
      limit: number;
      active: boolean;
    };
    primary: {
      method: string;
      currency: {
        currency: {
          code: string;
          name: string;
        };
      };
    };
    method: string;
    accounts: {
      [key: string]:
        | {
            type: string;
            bankAddress: string;
            bankCity: string;
            bankName: string;
            iban?: string;
            primary: boolean;
            recipientAccountId: string;
            swiftBic?: string;
            institution?: string;
            branchNum?: string;
            routing: string;
            branch: string;
            currency: string;
            country: string;
            name: string;
            accountNum: string;
          }
        | {
            type: string;
            address: string;
          };
    };
  }

  export interface Account {
    id: string;
    primary: boolean;
    currency: string;
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
  }

  export interface AccountResponse {
    ok: boolean;
    account: Account;
  }

  export interface AccountListResponse {
    ok: boolean;
    accounts: Account[];
  }

  export interface Response {
    ok: boolean;
    recipient: Recipient;
  }

  export interface ListResponse extends Serializer.WithMeta {
    ok: boolean;
    recipients: Recipient[];
  }
}

/**
 * @hidden
 */
export namespace BankInfo {
  export interface BankInfo {
    bankName: string;
    bankAddress?: string;
    bankRegion?: string;
    bankCity?: string;
    bankPostalCode?: string;
    institution?: string;
    branchNum?: string;
    iban?: string;
    accountNum?: string;
    routing?: string;
    swiftBic?: string;
    sortCode?: string;
    clabe?: string;
    bsb?: string;
    ifscCode?: string;
  }

  export type Result = {
    lookupData: BankInfo;
  };
}

export namespace Money {
  export type Amount = {
    value: number;
    currency: string;
  };
}
