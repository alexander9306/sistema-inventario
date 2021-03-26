module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
  },
  ignorePatterns: [
    "node_modules",
    ".cache",
    "public",
    ".eslintrc.js",
    "*.config.js",
  ],
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
}
