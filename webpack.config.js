let ExtractTextPlugin = require('extract-text-webpack-plugin')
let Path = require('path')

module.exports = {
    entry: './frontend/app.js',
    output: {
        path: Path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: "http://localhost:2992/public/"
    },
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
        new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
    ]

}