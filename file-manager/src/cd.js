import {resolve} from "node:path";
import {stat} from "node:fs/promises";

export const cd = async(url, path) => {
   const newPath = resolve(url, path[0]);
   try{
      const fsStat = await stat(newPath);
      return fsStat.isDirectory() ? newPath : '';
   } catch (error) {
      return '';
   }
};
