let LiveReloadPlugin = require('webpack-livereload-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let Path = require('path')

module.exports = {
    entry: './public/app.js',
    output: {
        path: Path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: "http://localhost:2992/public/"
    },
    devtool: 'source-maps',
    maodule: {
        rules: [
            {
                text: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?sourceMap'})
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin({})
    ]
}
