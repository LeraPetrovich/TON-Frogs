import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export const buildLoaders = (options: BuildOptions): ModuleOptions["rules"] => {

  const cssLoader = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName:
          options.mode == "development"
            ? "[path][name]__[local]"
            : "[hash:base64:8]",
      },
    },
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.mode !== "development"
        ? MiniCssExtractPlugin.loader
        : "style-loader",
      cssLoader,
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [scssLoader, tsLoader];
};
