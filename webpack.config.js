const iCrushLoaderPlugin = require('icrush/webpack/icrush-loader-plug');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'dist/main.js',
        chunkFilename: 'dist/bundle.[name].[chunkhash].js'
    },
    devServer: {
        contentBase: './',
        compress: true,
        host: 'localhost',
        port: '20000',
        hot: true,
        inline: true,
        historyApiFallback: true,
        disableHostCheck: true,
        watchOptions: {
            poll: true,
            ignored: /node_modules/,
            aggregateTimeout: 300
        }
    },
    module: {
        rules: [{
            test: /\.iCrush$/,
            loader: ['icrush/webpack/icrush-loader.js'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'icrush/webpack/icrush-style-loader.js', 'css-loader']
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "dist/[name].[ext]",
                    context: "src/asset",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new iCrushLoaderPlugin()
    ],
    mode: 'production'
};