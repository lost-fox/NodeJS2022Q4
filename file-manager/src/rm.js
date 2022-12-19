import fs from "node:fs/promises";
import {resolve} from "node:path";
import {stat} from "node:fs/promises";

export const rm = async(url, data) => {
   try {
     const path = resolve(url, data[0]); 
     const fileStat = await stat(path);

      if(!fileStat.isFile()){
         console.log(`'\x1b[31mOperation failed\x1b[0m'`);
         return;
      }
      await fs.unlink(path);

   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
};
