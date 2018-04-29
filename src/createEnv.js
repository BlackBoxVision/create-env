const fs = require('fs');
const chalk = require('chalk');

const env = require('./env');

const createKeyFilter = str => key => key.startsWith(str);

const createEnv = (processEnv, options) => {
    if (options.debug) {
        console.info(chalk.yellow(`Debug mode is enabled.`));
    }

    let envPrefix = null;

    if (options.useDefaultPrefix) {
        envPrefix = env.get(options.envName);
    } else {
        envPrefix = options.envPrefix;
    }

    if (options.debug) {
        console.info(chalk.yellow(`Creating ${options.envFileName} file with the following options:`));

        console.info(chalk.green(`env: ${options.envName}`));
        console.info(chalk.green(`env-file: ${options.envFileName}`));
        console.info(chalk.green(`env-prefix: ${envPrefix}`));
        console.info(chalk.green(`use-default-prefix: ${options.useDefaultPrefix}`));
    }

    const envKeys = Object.keys(processEnv);
    const envReducer = (str, key) => {
        const envKey = key.replace(envPrefix, '');
        const envValue = processEnv[key];

        return str + `${envKey}=${envValue} \r\n`;
    };

    const envValues = envKeys.filter(createKeyFilter(envPrefix));
    const envStr = envValues.reduce(envReducer, '');

    if (options.debug) {
        console.info(chalk.yellow(`Environment values: ${envStr}`));
    }

    fs.appendFileSync(`${process.cwd()}/${options.envFileName}`, envStr);

    if (options.debug) {
        console.info(chalk.yellow(`File ${options.envFileName} was created successfully.`));
    }
};

module.exports = createEnv;
