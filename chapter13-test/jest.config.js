module.exports = {
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
  testMatch: ["**/test/**/*.spec.js"],
  testEnvironment: "jsdom",
  snapshotSerializers: ["jest-serializer-html"],
  watchPathIgnorePatterns: [
    "<rootDir>/.storybook",
    "<rootDir>/.stories",
    "/node_modules/",
    "<rootDir>/cypress",
  ],
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup.js"],
};
