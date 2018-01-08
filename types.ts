/*
 *  General serializer types
 */

// tslint:disable:no-shadowed-variable
// tslint:disable:prefer-method-signature

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

  export interface Serializer<T, R, L extends WithMeta = never> {
    serialize: (target: T) => R;
    serializeList: (listArgs: ListArg<T>, serializer?: Serializer<T, R, L>) => L;
  }

  export interface SerializerNoList<T, R> {
    serialize: (target: T) => R;
  }

  export interface SerializerSimple<T, R, L> {
    serialize: (target: T) => R;
    serializeList: (listArgs: T[]) => L;
  }
}

export namespace Admin {
}

/*
** accountActivity.ts
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

/*
** apiCall.ts
*/
export namespace ApiCall {
  export interface ApiCall {
    ip: string;
    url: string;
    method: string;
    headers: string;
    request: string;
    response: string;
    code: number;
    source: string;
    testMode: boolean;
    createdAt: string;
  }

  export interface Result {
    apiCall: ApiCall;
  }

  export interface ListResult extends Serializer.WithMeta {
    activities: ApiCall[];
  }
}

/*
** apiKey.ts
*/
export namespace ApiKey {
  export interface ApiKey {
    name: string;
    accessKey: string;
    active: boolean;
    sandbox: boolean;
    lastUsedAt: string;
    createdAt: string;
    secretKey?: string;
  }

  export interface Result {
    apiKey: ApiKey;
  }

  export interface ListResult {
    apiKeys: ApiKey[];
  }
}

export namespace Approval {
  /*
  ** approval-list.ts
  */
  export interface Approval {
    approval: boolean;
    userId: string;
    createdAt: string;
    comment?: string;
  }

  export interface Result {
    approval: Approval;
  }

  export interface ListResult {
    approvals: Approval[];
  }

  /*
  **  approval-settings.ts
  */
  export interface Settings {
    id: string;
    approvalNumber?: number;
    approvalLimit?: string;
  }

  export interface SettingsResult {
    approvalSettings: Settings | null;
  }

  export interface SettingsListsResult {
    settings: Settings[];
  }

  /*
  **
  */
  interface SettingsUser {
    id: string;
    email: string;
    approvalSettingId: string;
    name: string;
  }

  export interface SettingsUserResult {
    approver: SettingsUser;
  }

  export interface SettingsUserListResult {
    approvers: SettingsUser[];
  }
}

export namespace Approver {
  /*
  **  approvalSettings-approvers.ts
  */
  export interface Approver {
    id: string;
    email: string;
    approvalSettingId: string;
    name: string;
  }

  export interface ListResult {
    approvers: Approver[];
  }
}

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
    balance: Balance;
  }

  export interface ListResult {
    balances: {
      [key: string]: Balance;
    };
  }
}

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
    batch: Batch;
  }

  export interface ListResult extends Serializer.WithMeta {
    batches: Batch[];
  }
}

export namespace BatchBalance {
  interface BatchBalance {
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
    paymentId: number;    // TODO: THis is useless, should be the GUID
  }

  export interface BatchSummary {
    detail: {
      [method: string]: SummaryInfo;
    };
    total: SummaryInfo;
  }

  export interface Result {
    batchSummary: BatchSummary;
  }
}

export namespace BeneficialOwner {
  export interface BeneficialOwner {
    id: number;
    profileId: number;
    firstName: string;
    lastName: string;
    percentOfOwnership: string;
    ownershipType: string;
    country: string;
    address: string;
    city: string;
    region: string;
    zip: string;
  }

  export interface Result extends BeneficialOwner {
  }

  export interface ListResult extends Serializer.WithMeta {
    records: BeneficialOwner[];
  }
}

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

export namespace Country {
  export interface CountryCurrency {
    currency: string;
    isPrimary: boolean;
  }

  export interface RegionList {
    regions: {
      code: string;
      name: string;
    }[];
  }

  export interface Country {
    name: string;
    code: string;
    currencies: CountryCurrency[];
    regions: {
      [key: string]: string;
    };
  }

  export interface Result {
    country: Country;
  }

  export interface ListResult {
    countries: {
      [key: string]: Country;
    };
  }

}
/*
** currency.ts
*/
export namespace Currency {
  export interface Currency {
    code: string;
    name: string;
  }

  export interface Result {
    currency: Currency;
  }

  export interface ListResult {
    currencies: {
      [key: string]: Currency;
    };
  }
}

export namespace Fees {
  interface FeeGeneral {
    fxRate: string;
    merchantCoverAmount: string;
  }

  interface FeePaypal {
    fee: string;
  }

  interface FeeBank {
    wire: string;
    eft: string;
    ach: string;
    iach: string;
    sepa: string;
    wire_no_fx: string;
  }

  interface FeeStructure {
    currencyCode: string;
    general: FeeGeneral;
    paypal: FeePaypal;
    bankTransfer: FeeBank;
  }

  export interface FeesAll {
    fees: {
      [currency: string]: FeeStructure;
    };
  }

  export interface FeesCurrency {
    feeCurrency: FeeStructure;
  }

  export interface FeesIntegration {
    feeCurrencyIntegration: FeeGeneral | FeePaypal | FeeBank;
  }

  export interface FeesIntegrationType {
    feeCurrencyIntegrationType: string;
  }
}

export namespace IFrameConfig {
  export interface IFrameConfig {
    color: string;
    enabled: boolean;
    usTax: boolean;
    allowedDomains: string;
    faq: boolean;
    faqLink: string;
    allowedDomainsEnabled: boolean;
    taxIncomeCode: string;
    taxHelpText: string;
  }

  export type Result = IFrameConfig;
}

export namespace Merchant {
  export interface Balance {
    primary: boolean;
    type: string;
    currency: string;
    amount: string;
    pending: number;
  }

  export interface Merchant {
    id: number;
    merchantId: string;
    name: string;
    status: string;
    phone: string;
    website: string;
    permalink: string;
    primaryCurrency: string;
    allowedIPs: string;
    allowedDomains: string;
    balances?: {
      [key: string]: Balance;
    };
  }

  export type Result = Merchant;

  export interface ListResult extends Serializer.WithMeta {
    records: Merchant[];
  }
}

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

export namespace Notification {
  interface Notification {
    id: number;
    category: string;
    topic: string;
    action: string;
    url: string;
    source: string;
    testMode: boolean;
    createdAt: string;
    user?: {
      id: number;
      name: string;
    };
  }

  export interface Result {
    notification: Notification;
  }

  export interface ListResult extends Serializer.WithMeta {
    records: Notification[];
  }
}

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
  }

  export interface Result {
    payment: Payment;
  }

  export interface ListResult extends Serializer.WithMeta {
    payments: Payment[];
  }
}

export namespace PayoutMethod {
  interface PaypalSettings {
    apiUsername: string;
    apiPassword: string;
  }

  export interface PayoutMethod {
    integration: string;
    enabled: boolean;
    updatedAt: string;
    settings: {
      title: string;
    } & (PaypalSettings | {});
  }

  export interface Result {
    payoutMethod: PayoutMethod;
  }

  export interface ListResult {
    payoutMethods: PayoutMethod[];
  }
}

export namespace PaymentReason {
  interface PaymentReason {
    code: string;
    country: string;
    reason: string;
  }

  export type Response = PaymentReason;

  export type ListResponse = {
    paymentReasons: PaymentReason[],
  };
}

export namespace Pandadoc {
  type Pandadoc = {
    UUID: string;
    name: string;
  };

  export interface ListResult extends Serializer.WithMeta {
    records: Pandadoc[];
  }
}

export namespace Profile {
  export interface Profile {
    id: number;
    businessCountry: string;
    businessLegalName: string;
    businessAsName: string;
    businessWebsite: string;
    businessCategory: string;
    businessPurpose: string;
    businessPpm: string;
    businessTotalMonthly: string;
    businessAveragePayout: string;
    businessType: string;
    businessTaxId: string;
    businessAddress: string;
    businessCity: string;
    businessRegion: string;
    businessZip: string;
    businessPhone: string;
    businessFax: string;
    businessCertificate: string;
    signingPrimary: boolean;
    signingFirstName: string;
    signingLastName: string;
    signingTitle: string;
    signingDateOfBirth: string;
    signingSsn: string;
    signingPhone: string;
    signingEmail: string;
    signingAddress: string;
    signingCity: string;
    signingRegion: string;
    signingZip: string;
    signingCountry: string;
    idSigningIssuedId: string;
    idSigningType: string;
    idSigningState: string;
    idSigningDocNum: string;
    idSigningIssue: string;
    idSigningExpiry: string;
    idSigningCountry: string;
    noOwnership: boolean;
    completedAt: string | null;
    isPEP: boolean;

    primaryCurrency: string | undefined;

    beneficialOwners: BeneficialOwner.BeneficialOwner[];
  }

  export interface Result {
    profile: Profile;
  }
}

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
      status: string,
      checkedAt: string,
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
      [key: string]: {
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
      } | {
        type: string;
        address: string;
      };
    };
  }

  export interface Account {
    primary: boolean;
    currency: string;
    recipientAccountId: string;
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
    account: Account;
  }

  export interface AccountListResponse {
    accounts: Account[];
  }

  export interface Response {
    recipient: Recipient;
  }

  export interface ListResponse extends Serializer.WithMeta {
    recipients: Recipient[];
  }
}

export namespace Report {
  interface Entry {
    activeRecipients: string;
    totalRecipients: string;
    week: string;
  }

  export interface Report {
    [key: number]: Entry;
  }

  export interface Result {
    report: Report;
  }
}

export namespace Subscription {
  export interface Subscription {
    id: string;
    action: string;
    model: string;
    target: string;
  }

  export interface Result {
    subscription: Subscription;
  }

  export interface ListResult {
    subscriptions: Subscription[];
  }
}

export namespace TeamMember {
  export interface TeamMember {
    email: string;
    name: string;
    firstName: string;
    lastName: string;
    type: string;
    role: string;
    status: string;
    timeZone: string;
    language: string;
    emailSettings: any;
    updatedAt: string;
    createdAt: string;

    gravatarUrl: string;
    id: string;
  }

  export type Result = TeamMember;

  export interface ListResult extends Serializer.WithMeta {
    records: TeamMember[];
  }
}

export namespace ThirdPartyToken {
  interface ThirdPartyToken {
    data: string;
    thirdParty: string;
  }

  export type Result = ThirdPartyToken;
}

export namespace UploadFile {
  interface UploadLine {
    id: number;
    status: string;
    data: string;
    valid: boolean;
    errors: string;
    processedAt: string;
    // recipientId: number;
  }

  export interface UploadFile {
    id: number;
    testMode: boolean;
    status: string;
    type: string;
    referenceId: string;
    startedAt: string;
    completedAt: string;
    stats: {
      processable: number;
      records: number;
      pending: number;
      failed: number;
      processed: number;
    };
    lines: UploadLine[];
  }

  export type Result = UploadFile;
}

export namespace User {
  export interface User {
    id: string;
    merchantId: string;
    notificationNumber: string;
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    status: string;
    timeZone: string;
    language: string;
    email: string;
    emailSettings: any;
    gravatarUrl: string;
    hmac: string;
    authType: number;
  }

  export type Response = User;

  export interface ListResponse extends Serializer.WithMeta {
    records: User[];
  }
}

export namespace Webhook {
  interface Webhook {
    testMode: boolean;
    topic: string;
    address: string;
  }

  export type Response = Webhook;

  export interface ListResponse extends Serializer.WithMeta {
    records: Webhook[];
  }
}

export namespace WhiteLabel {
  export interface DnsRecord {
    type: string;
    host: string;
    data: string;
    valid: boolean;
  }

  export interface Dns {
    dnsRecords: DnsAttributes;
  }

  export interface DnsAttributes {
    mailCname: DnsRecord;
    dkim1: DnsRecord;
    dkim2: DnsRecord;
  }

  export interface Settings {
    whiteLabelSettings: SettingsAttributes | null;
  }

  export interface SettingsAttributes {
    website: string;
    supportEmail: string;
    country: string;
    address: string;
    paymentMethod: boolean;
    paymentReturned: boolean;
    paymentSent: boolean;
    email: string;
    businessName: string;
    domain: string;
    subdomain: string;
    color: string;
    icon: string;
  }
}

export namespace BalanceAddFunds {
  export interface BalanceAddFunds {
    currency: string;
    amount: string;
    afxDealId: string;
    type: string;
  }

  export interface Result {
    transaction: BalanceAddFunds;
  }
}

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

export namespace Auth {
  export interface VerifyResult {
    valid: boolean;
    merchant: Partial<Merchant.Merchant>;
  }

  export interface AuthResult {
    token: string;
    user: User.User;
  }
}

export namespace PandadocState {
  export type Result = {
    state: string;
  };
}
