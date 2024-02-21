module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true  // Enables parsing of JSX
        }
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"  // Automatically detect the React version
        }
    },
    "rules": {
        "react/display-name": "off",  // Turn off display name rule
        "react/react-in-jsx-scope": "off"  // React import is not necessary with the new JSX transform
    }
}

