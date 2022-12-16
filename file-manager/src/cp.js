import {resolve} from "node:path";
import fs from "node:fs";
import {stat} from "node:fs/promises";

export const cp = async(url, data) => {
   try {
      const [oldFile, newFile] = data;
      const oldPath = resolve(url, oldFile);
      const newPath = resolve(url, newFile);
      const fileStat = await stat(oldPath);

      if(!fileStat.isFile()){
         console.log(`'\x1b[31mOperation failed\x1b[0m'`);
         return;
      }

      const readable = fs.createReadStream(oldPath, {encoding: 'utf-8'});
      const writable = fs.createWriteStream(newPath);
      readable.pipe(writable);
      console.log(`'\x1b[32mFile changed\x1b[0m'`); 

   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
};
