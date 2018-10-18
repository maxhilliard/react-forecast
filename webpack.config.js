const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const postCssValuesPlugin = require('postcss-icss-values');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: './src/config/config.json', to: './',
}]);

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/_dist'),
        filename: 'index.bundle.js',
    },
    devServer: {
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoader: 1,
                            modules: true,
                            localIdentName: '[name]_[local]__[hash:base64:5]',
                        },
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                postCssValuesPlugin,
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig,
        CopyWebpackPluginConfig,
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Services: path.resolve(__dirname, 'src/services/'),
        },
    },
};
