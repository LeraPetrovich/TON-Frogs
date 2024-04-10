import path from "path";
import webpack from "webpack";

import { buildWebPack } from "./config/build/buildWebPack";
import { BuildMode, BuildPath } from "./config/build/types";


interface EnvTypes {
  mode: BuildMode;
  port: number;
}

export default (env: EnvTypes) => {
  const paths: BuildPath = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const config: webpack.Configuration = buildWebPack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
  });
  return config;
};
