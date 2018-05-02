# :rocket: Create-Env :rocket: 
[![NPM Version](https://img.shields.io/npm/v/create-env.svg?maxAge=2592000)](https://img.shields.io/npm/v/create-env.svg?maxAge=2592000) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)  [![Build Status](https://travis-ci.org/BlackBoxVision/create-env.svg?branch=master)](https://travis-ci.org/BlackBoxVision/create-env) [![Coverage Status](https://coveralls.io/repos/github/BlackBoxVision/create-env/badge.svg?branch=master)](https://coveralls.io/github/BlackBoxVision/create-env?branch=master) [![codecov](https://codecov.io/gh/BlackBoxVision/create-env/branch/master/graph/badge.svg)](https://codecov.io/gh/BlackBoxVision/create-env) 
![npm](https://img.shields.io/npm/dm/create-env.svg)


`create-env` is an utility to help you create .env files based on CI/CD environmental values. 

## Use case

You use Gitlab-CI/CD or another CI/CD to perform a build of a software artifact and you want to use the provided CI/CD secret variables as a `.env` file. This is where `create-env` comes to the rescue. 

## How it Works

You have defined your secret-variables inside of the CI/CD, and your variables uses a prefix like `DEV_`, `TEST_`, `PROD_`. `create-env` will take the current environment for your CI/CD pipeline, a prefix related to that environment, and the name of the file you want as output. 

Then, it will generate that .env file, and remove the `prefix` of each secret-variable.

e.g: 

- `Your secret-variables`:

```shell
TEST_NODE_ENV=production
TEST_PORT=8080
````

- `Your .env file output`:

```shell
NODE_ENV=production
PORT=8080
```

## Installation

`create-env` needs to be installed as a global dependency: 

### NPM

```shell
npm i -g create-env
```

### YARN

```shell
yarn global add create-env
```

## Creating a .env file

To create a `.env file` you have to run `create-env` with the following parameters:

```shell
# Default
create-env --env-file .env --env-prefix TEST_

# NPX
npx create-env --env-file .env --env-prefix TEST_
```

`create-env` comes with a set of default prefixes (`DEV_`, `TEST_`, `PROD_`), if your secret-variables use those default prefixes, you can run `create-env` with the following parameters, the only thing your have to pass is the `env` which can be one of `development`, `testing` or `production`:

```shell
# Default
create-env --env testing --env-file .env --use-default-prefix

# NPX
npx create-env --env testing --env-file .env --use-default-prefix
``` 

## TODO

- [ ] Add `--from-template` option. (In order to support .env generation based on another .env file).
- [ ] Add `--no-prefix` option. (In order to support generate a .env file with all the env variables).
- [ ] Add `--type` option. (In order to support other formats like JSON envs).
- [ ] Add `--help` option. 

## Issues

If you raise a bug, please, open an [issue](https://github.com/BlackBoxVision/create-env/issues).

## Contributing

PRs are welcome. Any kind of contribution is welcome. 

## License

`create-env` is licensed as [MIT](https://github.com/BlackBoxVision/create-env/blob/master/LICENSE).
