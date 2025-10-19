import type { Config } from "tailwindcss";
import AppConfig from "./app/config";

const config: Config = {
  theme: {
    colors: AppConfig.theme,
  },
};
export default config;
