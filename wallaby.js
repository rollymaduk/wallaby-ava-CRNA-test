/* eslint-disable */
module.exports = wallaby => ({
    files: [
        'constants/**/*.js',
        'utility/**/*.js',
        '!**/*.test.js'],

    tests: ['**/*.test.js','!node_modules/**/*.test.js'],
    env: {
        type: 'node',
        runner: require('os').homedir() + '/.nvm/versions/node/v8.2.1/bin/node',
    },
    compilers: {
        '**/*.js': wallaby.compilers.babel(),
    },
    testFramework: 'ava',
    setup: () => {
        require('babel-polyfill');
    },
    debug:true
});
