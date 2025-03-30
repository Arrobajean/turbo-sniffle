const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // Nueva importación
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin; // Importación del CleanWebpackPlugin
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true, // Elimina los archivos antiguos de la carpeta dist (opcional si usas el plugin)
    publicPath: "/", // Cambia esto según sea necesario
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Usa MiniCssExtractPlugin
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // Usa MiniCssExtractPlugin
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][hash][ext]", // Mejora la gestión de imágenes
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    // new FaviconsWebpackPlugin({
    //   logo: "./src/assets/ui/favicon.ico",
    //   cache: true,
    //   inject: true,
    //   favicons: {
    //     appName: "Ananda de Sousa - Portfolio",
    //     appDescription: "Portfolio de Ananda de Sousa",
    //     developerName: "Ananda de Sousa",
    //     developerURL: null,
    //     background: "#fff",
    //     theme_color: "#333",
    //     icons: {
    //       coast: false,
    //       yandex: false,
    //     },
    //   },
    // }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // Archivos CSS separados
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(), // Limpia la carpeta dist antes de cada compilación
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // Minimización de CSS
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8081,
    historyApiFallback: true,
  },
  mode: "development", // Cambia a 'production' para la versión final
  devtool: "source-map", // Habilita el mapa de fuentes para facilitar la depuración
};
