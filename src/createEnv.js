const fs = require('fs');

const env = require('./env');
const { createKeyFilter, log, getEnv } = require('./utils');

const createEnv = (processEnv, { debug, name, fileName, prefix, useDefaultPrefix }) => {
    const envPrefix = useDefaultPrefix ? env.get(name) : prefix;

    log(`Creating ${fileName} file with the following options:`, debug, 'yellow');

    log(`env: ${name}`, debug);
    log(`env-file: ${fileName}`, debug);
    log(`env-prefix: ${envPrefix}`, debug);
    log(`use-default-prefix: ${useDefaultPrefix}`, debug);

    const envStr = getEnv(processEnv, envPrefix);

    log(`Environment values:\r\n${envStr}`, debug);

    fs.appendFileSync(`${process.cwd()}/${fileName}`, envStr);

    log(`File ${fileName} was created successfully.`, debug, 'yellow');
};

module.exports = createEnv;
