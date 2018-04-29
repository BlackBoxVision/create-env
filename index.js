#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const Commander = require('commander');
const exec = require('child_process').exec;

const pkg = require('./package.json');
const createEnv = require('./src/createEnv');

const commandLine = new Commander.Command(pkg.name);

commandLine
    .version(pkg.version)
    .description(pkg.description)
    .option('-e, --env [value]')
    .option('-f, --env-file [value]')
    .option('-p, --env-prefix [value]')
    .option('-u, --use-default-prefix')
    .option('-d, --debug')
    .parse(process.argv);

createEnv(process.env, {
    debug: commandLine.debug,
    envName: commandLine.env,
    envPrefix: commandLine.envPrefix,
    envFileName: commandLine.envFile,
    useDefaultPrefix: commandLine.useDefaultPrefix
});