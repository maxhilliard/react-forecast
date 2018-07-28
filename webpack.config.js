const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: "./src/index.html",
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/_dist"),
        filename: "index_bundle.js"
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
                    loader: "babel-loader"
                },
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
