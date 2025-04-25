import * as esbuild from "esbuild";
import { rmSync } from "fs";
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname } from "path";

// Remove the previous build directory
rmSync("./.local/express/dist", { recursive: true, force: true });

const DIST_DIR = "./.local/express";
const DATA_SRC = "./src/server/data.json";
const DATA_DEST = `${DIST_DIR}/data.json`;
function copyDataJson() {
  if (!existsSync(DATA_SRC)) {
    console.error(`Source data.json not found at ${DATA_SRC}`);
    process.exit(1);
  }
  // Ensure destination directory exists
  mkdirSync(dirname(DATA_DEST), { recursive: true });
  try {
    copyFileSync(DATA_SRC, DATA_DEST);
    console.log(`Copied ${DATA_SRC} to ${DATA_DEST}`);
  } catch (err) {
    console.error(`Failed to copy data.json: ${err.message}`);
    process.exit(1);
  }
}

copyDataJson();
const config = {
  entryPoints: ["src/server/express/server.ts"],
  bundle: true,
  sourcemap: true,
  format: "cjs",
  platform: "node",
  target: "node20",
  external: [],
  outfile: "./.local/express/dist/api.js",
  tsconfig: "./tsconfig.json",
};

if (process.argv.includes("--watch")) {
  async function watch() {
    let ctx = await esbuild.context(config);
    await ctx.watch();
    console.log("Watching...");
  }
  watch(); // Must not have an `await` for watch to work
} else {
  // Run esbuild with the specified options
  esbuild.build(config).catch(() => process.exit(1));
}
