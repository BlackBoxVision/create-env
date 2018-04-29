# Create-Env

`create-env` is an utility to help you create .env files based on CI/CD environmental values. 

This utility runs over `nodejs`, so `nodejs` installation is required for its usage.

## Use case

You use Gitlab-CI/CD or another CI/CD to perform a build of a software artifact and you want to use the provided CI/CD secret variables as a `.env` file. This is where `create-env` comes to the rescue. 

## Install 

Install as a global dependency: 

### NPM

`npm i -g create-env`

### YARN

`yarn global add create-env`

## Usage

Default usage: 
`create-env --env testing --env-prefix TEST_ --env-file .env`

With Default Prefix:
`create-env --env testing --env-file .env --use-default-prefix`

With debug options enabled:
`create-env --env testing --env-file .env --debug`