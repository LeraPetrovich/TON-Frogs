import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "../buildPlugins";
import { buildResolver } from "./buildResolver";
import { BuildOptions } from "./types";

export const buildWebPack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;
  const isDev = mode === "development";
  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolver(),
    devtool: isDev && "inline-source-map",
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
