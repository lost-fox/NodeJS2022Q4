import {sep} from "node:path";

export const getFileName = (pathToFile) => {
   return pathToFile.lastIndexOf(sep) > 0 ? pathToFile.slice(pathToFile.lastIndexOf(sep)+1, pathToFile.lenght) : pathToFile;
};
