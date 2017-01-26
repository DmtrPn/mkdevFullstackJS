let ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './frontend/app.js',
    output: {
        filename: 'bundle.js',
        path: './frontend'
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader?sourceMap'
            })
        }]
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
    ]

}