module.exports = {
    "extends": "airbnb-base",
    "env": {
        "node": true,
        "jest": true,
        "es6": true
    },
    "parser": "typescript-eslint-parser",
    "rules": {
        "no-restricted-syntax": "off",
        "no-await-in-loop": "off",
        "no-underscore-dangle": "off",
        "no-use-before-define": "off",
        "guard-for-in": "off",
        "indent": ["error", 4],
        "newline-per-chained-call": ["error", {"ignoreChainWithDepth": 1}]
    }
}; 