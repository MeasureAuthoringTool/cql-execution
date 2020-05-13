module.exports = {
  mochaEnvFilePattern: '^.*-test.js$',
  useJSModules: false,
  decaffeinateArgs: [
    '--loose-default-params',
    '--loose-for-expressions',
    '--loose-for-of',
    '--loose-includes'
  ],
  outputFileExtension: 'js'
};
