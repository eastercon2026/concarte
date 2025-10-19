#!/usr/bin/env tsx
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import config from "../app/config.js";

const green = (text: string) => {
  const supportsColor =
    !process.env.NO_COLOR &&
    (!!process.env.FORCE_COLOR ||
      process.platform === "win32" ||
      (process.stdout.isTTY && process.env.TERM !== "dumb") ||
      !!process.env.CI);
  return supportsColor ? `\x1b[32m${text}\x1b[0m` : text;
};

const themeCss = `@theme {
${Object.entries(config.theme)
  .map(([key, value]) => `  --color-${key}: ${value};`)
  .join("\n")}
}
`;

const outputDir = join(process.cwd(), "generated");
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "theme.css");
writeFileSync(outputPath, themeCss, "utf-8");

console.log(` ${green("✓")} Generated generated/theme.css from app/config.ts`);
