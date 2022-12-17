import {resolve} from "node:path";
import {stat} from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliCompress } from "node:zlib";
import { getFileName } from "./getFileName.js";

export const compress = async(url, value) => {
   try {
    const [pathToFile, pathToDest] = value;  
    const path = resolve(url, pathToFile); 
    const fileStat = await stat(path);

    if(!fileStat.isFile()){
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
      return;
    }

    const fileName = getFileName(pathToFile);
    const newPath = resolve(url, pathToDest, fileName)

    const int = createReadStream(path);
    const out = createWriteStream(newPath+'.gz');
    const brot = createBrotliCompress();

    int.pipe(brot).pipe(out);
    console.log(`'\x1b[32mFile changed\x1b[0m'`);

   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
};
