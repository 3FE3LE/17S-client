// Learn more at https://jestjs.io/docs/presets
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  moduleNameMapper: {
    // Mock react-native to be react-native-web
    "^react-native$": "react-native-web",
    // If you're using CSS Modules, you can mock them here
    "\\.css$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
