import { argv } from "./src/argv.js";
import { homedir, EOL } from "node:os";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { ls } from "./src/ls.js";

const index = () => {
   const userName = argv();
   const rootDir = homedir();

   const rl = readline.createInterface({input, output, prompt: `You are currently in ${rootDir + EOL}` })

   const operations = (value) => {
      switch (value) {
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
   }


   const statr = () => {
      rl.prompt();
      rl.on('line', (line) => {
         operations(line.trim());
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
