// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42','k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': '[j, i]','52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };
  function polybius(input, encode = true) {


   const direction = encode ? encoder : decoder;
   let counter = 0;
   let nums = [0,1,2,3,4,5,6,7,8,9];
   for (let i = 0; i < direction.length; i++)
     {
       if (nums.includes(direction[i]))
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