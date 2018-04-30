const chalk = require('chalk');
const logger = require('winston');

logger.level = 'debug';

const createKeyFilter = str => key => key.startsWith(str);

const log = (str, debug, color = 'green') => debug && logger.log('debug', chalk[color](str));

const getEnv = (processEnv, envPrefix) => {
    const envKeys = Object.keys(processEnv);
    const envReducer = (str, key) => {
        const envKey = key.replace(envPrefix, '');
        const envValue = processEnv[key];

        return str + `${envKey}=${envValue}\r\n`;
    };

    const envValues = envKeys.filter(createKeyFilter(envPrefix));
    
    return envValues.reduce(envReducer, '');
};

module.exports = {
    createKeyFilter,
    getEnv,
    log,
};