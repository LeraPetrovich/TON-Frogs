import { Configuration } from "webpack";

export const buildResolver = (): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};
