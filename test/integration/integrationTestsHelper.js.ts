import * as paymentrails from "../../lib";
import * as nock from "nock";

export let apiClient: paymentrails.Gateway;

before(() => {
    apiClient = paymentrails.connect({
        key: process.env.TROLLEY_ACCESS_KEY,
        secret: process.env.TROLLEY_SECRET_KEY,
        environment: process.env.TROLLEY_ENVIRONMENT as any,
    } as any);
});

export let nockBack = nock.back

nockBack.setMode('record')
nockBack.fixtures = __dirname + '-fixtures'

export async function withNockRecorder(fixtureName: string, test: () => Promise<void>) {
    const { nockDone } = await nockBack(fixtureName)
    await test();
    nockDone();
}