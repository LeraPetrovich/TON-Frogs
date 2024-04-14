import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export const buildDevServer = (
  options: BuildOptions
): DevServerConfiguration => {
  return {
    port: options.port ? options.port : 5002,
    open: true,
    https: true,
    host: "hosting.timeweb.ru",
  };
};
