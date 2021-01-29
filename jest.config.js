module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.(js|ts)$': '<rootDir>/node_modules/babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!**/node_modules/**'
  ],
  coverageReporters: [
    // 'html',
    'text-summary'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
