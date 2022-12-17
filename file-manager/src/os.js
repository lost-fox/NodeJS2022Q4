import os from 'node:os';

export const funOS = (param) => {
   switch (param[0]) {
      case '--EOL':
         console.log(JSON.stringify(os.EOL));
         break;
      case '--cpus':
         const data = os.cpus().map((item) => ({model: item.model, speed: item.speed/1000 + 'GHz'}));
         console.table(data)
         break; 
      case '--homedir':
         console.log(os.homedir());
         break;  
      case '--username':
         console.log(os.userInfo().username);
         break;
      case '--architecture':
         console.log(os.arch());
         break;      
      default: 
         console.log('\x1b[31mInvalid input\x1b[0m');
         break;  
   }
};
