// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const encoder = require('./encoder');

const polybiusModule = (function () {
  // you can add any code you want within this function scope
    let nums = [0,1,2,3,4,5,6,7,8,9];
  
    const isNumber = (str) =>
    {
      for (let i = 0; i < str.length; i++)
        {
          if (nums.includes(str[i])) return true;
        }
    }
  
  function polybius(input, encode = true) {


   const direction = encode ? encoder.encoder : encoder.decoder;
   let counter = 0;
     
   for (let i = 0; i < direction.length; i++)
     {
       if (isNumber(direction[i]))
         {
           counter += 1;
         }
     }
    
  if(encode === false){
      const isEven = input.split(" ").join("");
      if (isEven.length % 2 != 0){
        return false;
      }
    } 
  return input
    .match(/[0-9]{2}|[a-z]|\s/g)
    .map(character => direction[character] || character)
    .join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
