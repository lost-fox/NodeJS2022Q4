import {resolve} from "node:path";
import fs from "node:fs";

export const add = (url, fileName) => {
   const newPath = resolve(url, fileName[0]);
   fs.open(newPath, 'w', (error) => {
      if (error) {
         console.log(`'\x1b[31mOperation failed\x1b[0m'`);
         return;
      };
      console.log(`'\x1b[32mFile created\x1b[0m'`);
   })
};
