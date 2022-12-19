import {resolve} from "node:path";
import fs from "node:fs";
import {stat} from "node:fs/promises";
import { getFileName } from "./getFileName.js";

export const cp = async(url, data) => {
   try {
      let [oldFile, newFile] = data;
      const oldPath = resolve(url, oldFile);
      const fileStat = await stat(oldPath);

      if(!fileStat.isFile()){
         console.log(`'\x1b[31mOperation failed\x1b[0m'`);
         return;
      }

      if (newFile === '.') newFile = '';

      const fileName = getFileName(oldFile);
      const newPath = resolve(url, newFile, fileName);

      const readable = fs.createReadStream(oldPath, {encoding: 'utf-8'});
      const writable = fs.createWriteStream(newPath);
      readable.pipe(writable);
      console.log(`'\x1b[32mFile changed\x1b[0m'`); 

   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
};
