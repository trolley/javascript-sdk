import * as trolley from "../../../lib";
import * as nock from "nock";

export const testingApiClient = trolley.connect({
    key: process.env.TROLLEY_ACCESS_KEY,
    secret: process.env.TROLLEY_SECRET_KEY,
    environment: process.env.TROLLEY_ENVIRONMENT as any,
} as any);

export let nockBack = nock.back
nockBack.setMode('record')
nockBack.fixtures = __dirname + '/fixtures'

export const startNockRec = async (filename: string) => {
    const { nockDone } = await nockBack(filename)
    return nockDone
}
