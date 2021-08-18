# gatsby-plugin-eslint

**Now working with Gatsby V3**

Replaces Gatsby's ESLint Webpack configs, giving you full control to customize linting with the rules and developer experience you specifically need to maintain code quality.

This will COMPLETELY OVERWRITE any ESLint Webpack Plugins that Gatsby uses.
The installation instructions will help you reactivate the [two required rules as of writing](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/#configuring-eslint):

- [`no-anonymous-exports-page-templates`](https://github.com/gatsbyjs/gatsby/blob/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/gatsby/src/utils/eslint-rules/no-anonymous-exports-page-templates.ts)
- [`limited-exports-page-templates`](https://github.com/gatsbyjs/gatsby/blob/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/gatsby/src/utils/eslint-rules/limited-exports-page-templates.ts)

## Installation

`npm install --save-dev gatsby-plugin-eslint eslint eslint-webpack-plugin`

or

`yarn add --dev gatsby-plugin-eslint eslint eslint-webpack-plugin`

## Default Settings

1. Lints development mode in the `'develop'` stage. Add other [Webpack Config Stages](https://www.gatsbyjs.com/docs/production-app/#webpack-config) into `stages` array to enable linting during other Gatsby stages (eg. `build-javascript`)
2. Lint `.js`, `.jsx`, `.ts`, and `.tsx` files.
3. Excludes `node_modules`, `bower_components`, `.cache`, and `public` folders from linting
4. Otherwise uses [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin#options) option defaults

## Usage

1. Create `.eslintrc` file in project root.

   ```javascript
   // .eslintrc

   // Gatsby's required rules
   {
     "rules": {
       "no-anonymous-exports-page-templates": "warn",
       "limited-exports-page-templates": "warn"
     }
   }
   ```

2. Add plugin into `gatsby-config.js`

   ```javascript
   // gatsby-config.js

   const path = require("path");
   // Get paths of Gatsby's required rules, which as of writing is located at:
   // https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
   // gatsby/src/utils/eslint-rules
   const gatsbyRequiredRules = path.join(
     process.cwd(),
     "node_modules",
     "gatsby",
     "dist",
     "utils",
     "eslint-rules"
   );

   module.exports = {
     plugins: [
       // ...other plugins
       {
         resolve: "gatsby-plugin-eslint",
         options: {
           // Gatsby required rules directory
           rulePaths: [gatsbyRequiredRules],
           // Default settings that may be ommitted or customized
           stages: ["develop"],
           extensions: ["js", "jsx", "ts", "tsx"],
           exclude: ["node_modules", "bower_components", ".cache", "public"],
           // Any additional eslint-webpack-plugin options below
           // ...
         },
       },
     ],
   };
   ```

3. Additionally as of writing, [Gatsby's default ESLint config](https://github.com/gatsbyjs/gatsby/blob/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/gatsby/src/utils/eslint-config.ts) may be copied over if you would still like to take advavntage of those rules.

## Configuring ESLint

Mix and match your own ESLint plugins and rules depending on the React/Javascript/Typescript patterns you want to enforce. Here are three ways you can get started:

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
     ],
     "rules": {
       "no-anonymous-exports-page-templates": "warn",
       "limited-exports-page-templates": "warn"
     }
   }
   ```

### Advanced React Linting with AirBnB's [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)

1. Follow [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) plugin installation procedures. If **npm 5+** this command works for `npm` and `yarn`

   `npx install-peerdeps --dev eslint-config-airbnb`

2. Add `.eslintrc` file to project root:

   ```javascript
   {
     "extends": "airbnb",
     "rules": {
       "no-anonymous-exports-page-templates": "warn",
       "limited-exports-page-templates": "warn"
     }
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
     ],
     "rules": {
       "no-anonymous-exports-page-templates": "warn",
       "limited-exports-page-templates": "warn"
     }
   }
   ```
