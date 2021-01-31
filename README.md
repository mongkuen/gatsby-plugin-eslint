# gatsby-plugin-eslint

Adds ESLint to your Gatsby dev environment, maintaining code quality as you develop.

**NOTE:** Current version `^3.0.0` is a breaking update as `eslint-loader` was deprecated in favor of `eslint-webpack-plugin`

## Installation
`npm install --save-dev gatsby-plugin-eslint eslint eslint-webpack-plugin`

or

`yarn add --dev gatsby-plugin-eslint eslint eslint-webpack-plugin`

<details>
  <summary>Deprecated version <=2.0.8 installation (Gatsby V2 with eslint-loader)</summary>

  1. Install the `gatsby-plugin-eslint` plugin:

      `npm install --save-dev gatsby-plugin-eslint@^2.0.8`

      or

      `yarn add --dev gatsby-plugin-eslint@^2.0.8`

  2. Install [ESLint](https://eslint.org/) and [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader):

      `npm install --save-dev eslint eslint-loader`

      or

      `yarn add --dev eslint eslint-loader`
</details>

<details>
  <summary>Deprecated version <=1.0.3 installation (Gatsby V1 with eslint-loader)</summary>

  1. Install the `gatsby-plugin-eslint` plugin:

      `npm install --save-dev gatsby-plugin-eslint@^1.0.3`

      or

      `yarn add --dev gatsby-plugin-eslint@^1.0.3`

  2. Install [ESLint](https://eslint.org/) and [`eslint-loader`](https://github.com/webpack-contrib/eslint-loader):

      `npm install --save-dev eslint eslint-loader`

      or

      `yarn add --dev eslint eslint-loader`
</details>


## Usage
1. Create `.eslintrc` file in project root.
2. Add plugin into `gatsby-config.js`
  ```javascript
  // gatsby-config.js

  module.exports = {
    plugins: [
      // ...other plugins
      'gatsby-plugin-eslint'
    ]
  }
  ```

If no options are specified, plugin defaults to the following:
1. Lints in development mode in the `'develop'` stage. Add other [Webpack Config Stage](https://www.gatsbyjs.com/docs/production-app/#webpack-config) into `stages` array to enable linting during other stages (eg. `build-javascript`)
2. Lint `.js`, `.jsx`, `.ts`, and `.tsx` files.
3. Excludes `node_modules`, `.cache`, and `public` folders from linting
4. Otherwise uses [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin#options) option defaults

You can pass your own [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin#options) options into `gatsby-config.js`

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    // ...other plugins
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
        // Any eslint-webpack-plugin options below
      }
    }
  ]
}
```


<details>
  <summary>Deprecated version <=2.0.8 usage</summary>

  1. Create a `.eslintrc` file in your project root. Otherwise ESLint will complain.

  2. Add into `gatsby-config.js`.

      ```javascript
      // gatsby-config.js

      module.exports = {
        plugins: [
          'gatsby-plugin-eslint'
        ]
      }
      ```

  If no options are specified, the plugin defaults to:

  1. Lint `.js` and `.jsx` files.

  2. Exclude `node_modules`, `.cache`, and `public` folders from linting. Refrain from naming your project these folder names, otherwise make your own config option exclusions.

  3. Only lints in development in the `'develop'` stage. You may enable linting during other build/dev stages by adding any [Webpack Config Stage](https://www.gatsbyjs.org/docs/production-app/#webpack-config) into the `stages` array. For example, adding `'build-javascript'` into the `stages` array will enable linting during JS build time.

  4. Default [ESLint-Loader](https://github.com/webpack-contrib/eslint-loader#options) options.

  You can specify your own linting filetypes, exclusions, and [ESLint-Loader options](https://github.com/webpack-contrib/eslint-loader#options):

  ```javascript
  // gatsby-config.js
  module.exports = {
    plugins: [
      {
        resolve: 'gatsby-plugin-eslint',
        options: {
          test: /\.js$|\.jsx$/,
          exclude: /(node_modules|.cache|public)/,
          stages: ['develop'],
          options: {
            emitWarning: true,
            failOnError: false
          }
        }
      }
    ]
  }
  ```
</details>


## Configuring ESLint
You're want to mix and match your own ESLint plugins and rules depending on if the React/Javascript/Typescript patterns you want to enforce. Here are 3 ways you can get started:

### Basic React Linting with [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)

1. Follow [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) plugin installation procedures:

    `npm install --save-dev eslint-plugin-react babel-eslint`

    or

    `yarn add --dev eslint-plugin-react babel-eslint`

2. Add `.eslintrc` file to project root:

    ```javascript
    {
      "parser": "babel-eslint", // uses babel-eslint transforms
      "settings": {
        "react": {
          "version": "detect" // detect react version
        }
      },
      "env": {
        "node": true // defines things like process.env when generating through node
      },
      "extends": [
        "eslint:recommended", // use recommended configs
        "plugin:react/recommended"
      ]
    }
    ```

### Advanced React Linting with AirBnB's [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)

1. Follow [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) plugin installation procedures. If **npm 5+** this command works for `npm` and `yarn`

    `npx install-peerdeps --dev eslint-config-airbnb`

2. Add `.eslintrc` file to project root:

    ```javascript
    {
      "extends": "airbnb"
    }
    ```

### Typescript Linting with [ESLint Plugin Typescript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

1. Follow [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) plugin installation procedures:

    `npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`

    or

    `yarn add --dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`

2. Add `.eslintrc` file to project root:

    ```javascript
    {
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
      ]
    }
    ```

<details>
  <summary>Deprecated version <=2.0.8 configuration</summary>

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
</details>
