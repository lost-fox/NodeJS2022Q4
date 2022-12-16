import {resolve} from "node:path";
import fs from "node:fs/promises";

export const rn = async (url, data) => {
   const [pathFile, newName] = data;
   const oldPath = resolve(url, pathFile);
   const newPath = resolve(url, newName);

   try {
      await fs.rename(oldPath, newPath);
      console.log(`'\x1b[32mFile renamed\x1b[0m'`);
   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
};
