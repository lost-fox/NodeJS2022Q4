export const parsePath = (value) => {
   let operation = '';
   let input = [];
   let lineInp = '';
   if (value.includes(' ') && value.includes("'")) {
   operation = value.slice(0, value.indexOf(' '));
   lineInp = `${value.slice(value.indexOf(' ') + 1)}`
   } else {
   [operation, ...input] = value.split(' ');
   }
   let i = 0;


   while (i < lineInp.length) {
   if (lineInp[0] !== "'" ){
      i = lineInp.indexOf(' ');
      input.push(lineInp.slice(0, i));
      lineInp = `${lineInp.slice(i).trim()}`
   } else {
      i = lineInp.indexOf("'", 1);
      input.push(lineInp.slice(1, i));
      lineInp = `${lineInp.slice(i+1).trim()}`
   }
   }

   if(lineInp.length !== 0) {
      input.push(lineInp);
    }

   return {operation, input}
};
