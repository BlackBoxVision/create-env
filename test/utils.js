const fs = require('fs');
const dotEnv = require('dotenv');

const Env = {
    DEV: `development`,
    TEST: `testing`,
    PROD: `production`
};

const EnvPrefixes = {
    DEVELOPMENT: `DEV_`,
    TESTING: `TEST_`,
    PRODUCTION: `PROD_`
};

const loadEnv = currentEnv => {
    dotEnv.load({ 
        path: `${process.cwd()}/test/envs/${currentEnv}.env` 
    });
};

const checkEnv = (currentEnv, callback) => {
    const env = dotEnv.parse(fs.readFileSync(`${process.cwd()}/${currentEnv}.env`));

    callback(env);

    fs.unlinkSync(`${process.cwd()}/${currentEnv}.env`);
};

module.exports = {
    Env,
    loadEnv,
    checkEnv,
    EnvPrefixes,
};