module.exports = {
  mochaEnvFilePattern: '^.*-test.js$',
  useJSModules: true,
  decaffeinateArgs: [
    '--loose-default-params',
    '--loose-for-expressions',
    '--loose-for-of',
    '--loose-includes'
  ],
  outputFileExtension: 'ts'
};