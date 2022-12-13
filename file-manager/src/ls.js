import { readdir } from "node:fs/promises";

export const ls = async (folder) => {
   const list = [];
   try {
      const files = await readdir(folder, {withFileTypes: true});
      for (const file of files) {
         const isDir = file.isDirectory() ? 'directory' : 'file'
         list.push({Name: `${file.name}`, Type: `${isDir}`});
      }
      console.table(list);
   } catch (err) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`)
   }
}
