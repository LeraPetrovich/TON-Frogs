import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { BuildOptions } from "./build/types";
import path from "path";

export const buildPlugins = (
  options: BuildOptions
): Configuration["plugins"] => {
  const { mode, paths } = options;
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    mode !== "development" &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public/favicon.ico"),
          to: path.resolve(__dirname, "../build"),
        },
        {
          from: path.resolve(__dirname, "../public/manifest.json"),
          to: path.resolve(__dirname, "../build"),
        },
      ],
    }),
  ].filter(Boolean);
};
