export const argv = () => {
   const argv = process.argv[2] ?? '';
   const index = argv.indexOf('=') + 1;
   const name = argv.slice(index, argv.lenght);
   return name;
};
