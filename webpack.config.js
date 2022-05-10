const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const FederatedTypesPlugin = require('@module-federation/typescript');

const deps = require("./package.json").dependencies;

const federationConfig = {
   name: "remote",
   filename: "remoteEntry.js",
   remotes: {
      host: "host@http://localhost:8080/remoteEntry.js",
   },
   exposes: {
      "./AwesomeButton": "./src/components/AwesomeButton.tsx",
   },
   shared: {
      react: {
         singleton: true,
         requiredVersion: deps.react,
      },
      "react-dom": {
         singleton: true,
         requiredVersion: deps["react-dom"],
      },
   },
}

module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
   new ModuleFederationPlugin(
     federationConfig
   ),
   new HtmlWebPackPlugin({
     template: "./src/index.html",
   }),
   new FederatedTypesPlugin(federationConfig),
 ],
};
