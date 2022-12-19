import { cp } from "./cp.js";
import { rm } from "./rm.js";


export const mv = async(url, data) => {
   try {
      await cp(url, data);
      await rm(url, data);
   } catch (error) {
      console.log(`'\x1b[31mOperation failed\x1b[0m'`);
   }
};
