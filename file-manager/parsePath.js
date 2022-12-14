export const parsePath = (value) => {
   const [operation, ...input] = value.split(' ');
   return {operation, input}
};
