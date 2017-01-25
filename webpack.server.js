module.exports = {
    entry: './public/app.js',
    output: {
        filename: 'bundle.js',
        path: './public'
    }
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