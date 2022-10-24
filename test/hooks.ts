import * as dotenv from 'dotenv';

process.env.NODE_ENV = 'test';
process.env.TS_NODE_PROJECT = './tsconfig.json';

export const mochaHooks = {
    beforeAll(done: any) {
        dotenv.config();

        done();
    },
};
