import {resolve} from "node:path";
import fs from "node:fs/promises";
import {sep} from "node:path";

export const rn = async (url, data) => {
   const [pathFile, newName] = data;
   const oldPath = resolve(url, pathFile);
   const path = pathFile.lastIndexOf(sep) > 0 ? pathFile.slice(0, pathFile.lastIndexOf(sep)) : '';
   const newPath = resolve(url, path, newName);
   try {
      await fs.rename(oldPath, newPath);
      console.log(`'\x1b[32mFile renamed\x1b[0m'`);
   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
};
