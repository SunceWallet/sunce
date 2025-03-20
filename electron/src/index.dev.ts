import autoReload from "electron-reload"
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const watch = path.join(__dirname, "..", "..", "dist", "*")

autoReload(watch, {
  electron: path.join(__dirname, "..", "..", "node_modules", ".bin", "electron")
})

// tslint:disable-next-line: no-var-requires
import("./app")
