const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");

const productionConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        publicPath: "/auth/latest/"
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: { "./AuthApp": "./src/bootstrap" },
            shared: packageJSON.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, productionConfig);