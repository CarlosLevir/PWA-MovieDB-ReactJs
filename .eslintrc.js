module.exports = {
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-console": "off"
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
};
