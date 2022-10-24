process.env.NODE_ENV = 'test';
process.env.TS_NODE_PROJECT = 'src/tsconfig.json';

exports.mochaHooks = {
    beforeAll: () => {
        console.log('beforeAll');
    },
};
