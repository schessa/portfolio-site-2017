module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
    },
    "parserOptions": {
      "ecmaVersion": 7,
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
