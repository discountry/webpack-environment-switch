# webpack-environment-switch
Switch dev &amp; production config using webpack config file.

## Directories structure

```
app/
  index.js
dist/
  bundle.js
webpack.config.js
package.json
```

## Usage

Install dependencies

```bash
npm install
npm install webpack -g
```

Test dev

```bash
npm run dev
// log 'Hello, app is using: dev-url'
```

Test production

```bash
npm run prod
// log 'Hello, app is using: prod-url'
```

## See also

* [Building for Production](https://webpack.js.org/guides/production-build/)
* [Using environment variables](https://webpack.js.org/guides/environment-variables/)
