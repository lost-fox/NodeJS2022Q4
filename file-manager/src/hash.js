import {resolve} from "node:path";
import {stat} from "node:fs/promises";
import { createHash } from "node:crypto";

export const calcHash = async(url, path) => {
   try {
      const pathFile = resolve(url, path[0]); 
      const fileStat = await stat(pathFile);
      const hash = createHash('sha256');
 
       if(!fileStat.isFile()){
          console.log(`'\x1b[31mOperation failed\x1b[0m'`);
          return;
       }
      
      hash.update(pathFile);
      console.log(hash.digest('hex')); 
      
   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
};
