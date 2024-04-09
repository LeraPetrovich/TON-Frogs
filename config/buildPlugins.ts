import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./build/types";

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
  ].filter(Boolean);
};
