import {resolve} from "node:path";
import {stat} from "node:fs/promises";
import fs from "node:fs";
import {stdout} from "node:process";
import { EOL } from "node:os";

export const cat = async(url, path) => {
   const newPath = resolve(url, path[0]);
   try{
      const fsStat = await stat(newPath);
      if (fsStat.isFile()) {
         const fileRead = fs.createReadStream(newPath, {encoding: 'utf-8'});
         fileRead.on('readable', () => {
            let data = fileRead.read();
            if (data !== null) {
               stdout.write(data + EOL);
            }
         })
      } else {
         console.log(`'\x1b[31mOperation failed\x1b[0m'`);
      }
   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
}
