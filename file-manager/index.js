import { argv } from "./src/argv.js";
import { homedir, EOL } from "node:os";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { ls } from "./src/ls.js";
import { cd } from "./src/cd.js";
import { parsePath } from "./parsePath.js";
import { up } from "./src/up.js";
import { cat } from "./src/cat.js";
import { add } from "./src/add.js";
import { rn } from "./src/rn.js";
import { cp } from "./src/cp.js";
import { mv } from "./src/mv.js";
import { rm } from "./src/rm.js";
import { funOS } from "./src/os.js";

const index = () => {
   const userName = argv();
   let rootDir = homedir();

   const rl = readline.createInterface({input, output, prompt: `You are currently in ${rootDir + EOL}` })

   const changePath = async(input) => {
      const newDir = await cd(rootDir, input);
      if (newDir !== '') {
         rootDir = newDir;
      } else {
         console.log(`'\x1b[31mOperation failed\x1b[0m'`)
      }
   };

   const operations = async(value) => {
      const {operation, input} = parsePath(value);
      switch (operation) {
         case 'up':
            rootDir = up(rootDir);
            break;
         case 'cd':
            await changePath(input);
            break;
         case 'cat':
            await cat(rootDir, input);
            break;  
         case 'add':
            add(rootDir, input);
            break; 
         case 'rn':
            await rn(rootDir, input);
            break;  
         case 'cp':
            await cp(rootDir, input);
            break; 
         case 'mv':
            await mv(rootDir, input);
            break;
         case 'rm':
            await rm(rootDir, input);
            break;
         case 'os':
            funOS(input);
            break;
         case 'ls': 
            ls(rootDir);
            break;
         case 'exit': 
            console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
            process.exit();
         default:
            console.log('\x1b[31mInvalid input\x1b[0m');
            break;  
      }
      rl.setPrompt(`You are currently in ${rootDir + EOL}`)
   }


   const statr = () => {
      rl.prompt();
      rl.on('line', async (line) => {
         await operations(line.trim());
         rl.prompt();
      }).on('close', () => {
         console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
         process.exit();
      })
   };

   if(userName) {
      console.log(`Welcome to the File Manager, ${userName}!`);
      statr();
   } else {
      console.log('\x1b[31mIncorrect --username argument\x1b[0m');
      process.exit();
   }
}

index();
