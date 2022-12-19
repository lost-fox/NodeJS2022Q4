import {sep} from "node:path";

export const up = (dir) => {
   const arrPath = dir.split(sep);
   if(arrPath.length > 1) {
      arrPath.pop();
   }
   return arrPath.length === 1 ? `${arrPath[0] + sep}` : arrPath.join(sep);;
};
