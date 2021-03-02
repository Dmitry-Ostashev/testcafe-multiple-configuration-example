const minimist = require('minimist');

const CONFIGURATION_TYPES = {
    DEV:  'dev',
    PROD: 'prod'
};

const configFiles = {
    [CONFIGURATION_TYPES.DEV]:  './tests-config-dev',
    [CONFIGURATION_TYPES.PROD]: './tests-config-prod'
};

const argv       = minimist(process.argv.slice(2));
const configType = argv.env || CONFIGURATION_TYPES.PROD;

module.exports = require(configFiles[configType]);