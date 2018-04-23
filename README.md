# gatsby-plugin-eslint

Adds ESLint to your Gatsby dev environment, maintaining code quality as you develop.

## Install

1. Install the `gatsby-plugin-eslint` plugin:

    `npm install --save-dev gatsby-plugin-eslint`

    or

    `yarn add --dev gatsby-plugin-eslint`

2. Install [ESLint](https://eslint.org/) and [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader):

    `npm install --save-dev eslint eslint-loader`

    or

    `yarn add --dev eslint eslint-loader`

## Usage

Add into `gatsby-config.js`.

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    'gatsby-plugin-eslint'
  ]
}
```

If no options are specified, the plugin defaults to:

1. Lint `.js` and `.jsx` files
2. Exclude `node_modules`, `.cache`, and `public` folders from linting.

You can specify your own linting filetypes and exclusions with the plugin options like so:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        exclude: /(node_modules|cache|public)/,
        test: /\.js$|\.jsx$/
      }
    }
  ]
}
```

## Configuring ESLint

You're free to install your own ESLint plugins and rules. Here are 2 easy ways to start linting:

### Basic [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) Linting

1. Follow [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) plugin installation procedures:

    `npm install --save-dev babel-eslint eslint-plugin-import eslint-plugin-react`

    or

    `yarn add --dev babel-eslint eslint-plugin-import eslint-plugin-react`

2. Add `.eslintrc` file to project root:

    ```javascript
    {
      "parser": "babel-eslint",
      "rules": {
        "strict": 0
      },
      "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
      ]
    }
    ```

### AirBnB's [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) Linting

1. Follow [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) plugin installation procedures:

    `npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

    or

    `yarn add --dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

2. Add `.eslintrc` file to project root:

    ```javascript
    {
      "extends": "airbnb"
    }
    ```
