const assert = require('assert');

const createEnv = require('../src/createEnv');
const { checkEnv, EnvPrefixes, Env, loadEnv } = require('./utils');

const runCreateEnvTestForEnv = (currentEnv, options) => {
    loadEnv(currentEnv);

    createEnv(process.env, {
        envName: currentEnv,
        envPrefix: EnvPrefixes[currentEnv.toUpperCase()],
        envFileName: `${currentEnv}.env`,
        useDefaultPrefix: options.useDefaultPrefix,
        debug: options.debug
    });

    checkEnv(currentEnv, env => {
        assert.equal(env['PORT'], 3400);
        assert.equal(env['APP_NAME'], 'services');
    });
};

describe(`createEnv Spec`, () => {
    it(`Create .env file from ${Env.DEV} vars with useDefaultPrefix=false && debug=false`, () => runCreateEnvTestForEnv(Env.DEV, { useDefaultPrefix: false, debug: false }));
    it(`Create .env file from ${Env.TEST} vars with useDefaultPrefix=false && debug=false`, () => runCreateEnvTestForEnv(Env.TEST, { useDefaultPrefix: false, debug: false }));
    it(`Create .env file from ${Env.PROD} varswith useDefaultPrefix=false && debug=false`, () => runCreateEnvTestForEnv(Env.PROD, { useDefaultPrefix: false, debug: false }));

    it(`Create .env file from ${Env.DEV} vars with useDefaultPrefix=true && debug=false`, () => runCreateEnvTestForEnv(Env.DEV, { useDefaultPrefix: true, debug: false }));
    it(`Create .env file from ${Env.TEST} vars with useDefaultPrefix=true && debug=false`, () => runCreateEnvTestForEnv(Env.TEST, { useDefaultPrefix: true, debug: false }));
    it(`Create .env file from ${Env.PROD} vars with useDefaultPrefix=true && debug=false`, () => runCreateEnvTestForEnv(Env.PROD, { useDefaultPrefix: true, debug: false }));

    it(`Create .env file from ${Env.DEV} vars with useDefaultPrefix=false && debug=true`, () => runCreateEnvTestForEnv(Env.DEV, { useDefaultPrefix: false, debug: true }));
    it(`Create .env file from ${Env.TEST} vars with useDefaultPrefix=false && debug=true`, () => runCreateEnvTestForEnv(Env.TEST, { useDefaultPrefix: false, debug: true }));
    it(`Create .env file from ${Env.PROD} vars with useDefaultPrefix=false && debug=true`, () => runCreateEnvTestForEnv(Env.PROD, { useDefaultPrefix: false, debug: true }));

    it(`Create .env file from ${Env.DEV} vars with useDefaultPrefix=false && debug=true`, () => runCreateEnvTestForEnv(Env.DEV, { useDefaultPrefix: true, debug: true }));
    it(`Create .env file from ${Env.TEST} vars with useDefaultPrefix=false && debug=true`, () => runCreateEnvTestForEnv(Env.TEST, { useDefaultPrefix: true, debug: true }));
    it(`Create .env file from ${Env.PROD} vars with useDefaultPrefix=false && debug=true`, () => runCreateEnvTestForEnv(Env.PROD, { useDefaultPrefix: true, debug: true }));
});