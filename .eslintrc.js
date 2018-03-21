module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "semi": [
            2,
            "never"
        ],
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "double"
        ],
        "no-console": "warn",
        "no-undef": "warn",
        "react/prop-types": [
            1
        ]
    }
};