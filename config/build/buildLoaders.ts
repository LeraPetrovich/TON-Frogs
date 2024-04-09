import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";

export const buildLoaders = (options: BuildOptions): ModuleOptions["rules"] => {
  const cSSLoader = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  };

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

  const videoLoader = {
    test: /\.(webm|mp4|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "media/[name].[hash:8].[ext]",
        },
      },
    ],
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "fonts/[name].[hash:8].[ext]",
        },
      },
    ],
  };

  const pngLoader = {
    test: /\.png$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "images/[name].[hash:8].[ext]",
        },
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "images/[name].[hash:8].[ext]",
        },
      },
    ],
  };

  return [
    cSSLoader,
    scssLoader,
    tsLoader,
    fontLoader,
    videoLoader,
    pngLoader,
    svgLoader,
  ];
};
