const removeFromArray = function(arr, ...args) {
   //   args.forEach(arg => {
   //      for (val of arr) {
   //       // console.log(val, arr, arg);
   //       let inx = arr.findIndex(item => (item === arg));
   //       // console.log(inx);
   //       if (inx >= 0) {arr.splice(inx,1)};
   //       // console.log(arr);
   //      }
   //   })
   //   return arr;
   return arr.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
