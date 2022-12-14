import { argv } from "./src/argv.js";
import { homedir, EOL } from "node:os";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { ls } from "./src/ls.js";
import { cd } from "./src/cd.js";
import { parsePath } from "./parsePath.js";

const index = () => {
   const userName = argv();
   let rootDir = homedir();

   const rl = readline.createInterface({input, output, prompt: `You are currently in ${rootDir + EOL}` })

   const changePath = async (input) => {
      const newDir = await cd(rootDir, input);
      if (newDir !== '') {
          rootDir = newDir;
      } else {
         console.log(`'\x1b[31mOperation failed\x1b[0m'`)
      }
   };

   const operations = (value) => {
      const {operation, input} = parsePath(value);
      switch (operation) {
         case 'up':
            break;
         case 'cd':
            changePath(input);
            break
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
      rl.on('line', (line) => {
         operations(line.trim());
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
