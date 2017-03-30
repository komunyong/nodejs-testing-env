# NodeJS ES6 Transpile Pre-Config
Pre-config testing environment for NodeJS Application in ES6 with some package webpack, babel, nodemon. We use for easy clone and test suddenly for ES6 syntax and don't need to config anything even webpack, babel and nodemon.

# Usage
- install gulp by `npm i gulp -g`
- `npm install` at top-level of project.
- copy folder `sample-app` and change folder name for your testing project
- to run testing, go to [your-project] folder and run `npm start`
- when you done with edit your source code, just `npm start`
**Notice**: if you are not beginner, you know how to do.

# References
- [ES6](http://es6-features.org/#Constants): Javascript Standard that improve more features from ES2015.
- [Webpack v.1.x](https://webpack.github.io/): Modules bundler.
- [Babel](https://babeljs.io/): Javascript Compiler, we used for compile ES6 to ES5 (ES2015).
- [Babel Loader](https://github.com/babel/babel-loader): plugin for webpack auto build.
- [Nodemon](https://nodemon.io/): Tracking and autocompile when .

## Why
- `webpack.config.js` => `target: 'node'` set this to tell webpack that do not touch system module, eg. fs, dns, tls - sometimes it'll error cannot find module when build
- `webpack.config.js` => `externals: {'[externalModule]': 'commonjs [externalModule]'}, eg. { 'pg-promise': 'commonjs pg-promise } - tell webpack to ignore all this module, prevent some module is break while bundle.
- [commonjs](http://www.commonjs.org/) is used for support
  - Server-side JavaScript applications
  - Command line tools
  - Desktop GUI-based applications
  - Hybrid applications (Titanium, Adobe AIR)
