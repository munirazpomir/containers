module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    coverageDirectory: 'coverage',
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
      }
    }
  };