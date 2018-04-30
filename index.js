#!/usr/bin/env node
'use strict';

const Commander = require('commander');

const packageJson = require('./package.json');
const createEnvFromProcessVars = require('./src/createEnv');

const createEnv = new Commander.Command(packageJson.name);

createEnv
    .version(packageJson.version)
    .description(packageJson.description)
    .option('--env [value]')
    .option('--env-file [value]')
    .option('--env-prefix [value]')
    .option('--use-default-prefix')
    .option('--debug')
    .parse(process.argv);

createEnvFromProcessVars(process.env, {
    name: createEnv.env,
    debug: createEnv.debug,
    prefix: createEnv.envPrefix,
    fileName: createEnv.envFile,
    useDefaultPrefix: createEnv.useDefaultPrefix
});