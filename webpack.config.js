let LiveReloadPlugin = require("webpack-livereload-plugin")

module.exports = {
    entry: './public/app.js',
    output: {
        filename: 'bundle.js',
        path: './public'
    },
    plugins: [
        new LiveReloadPlugin({})
    ]
}