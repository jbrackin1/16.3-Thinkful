// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  
  const isLetter = (str) => {
    for (let i = 0; i < str.length; i++)
      {
        if (alpha.includes(str[i])) return true; 
      }
  }
  
  function caesar(input, shift, encode = true) {
 if (!shift || shift == 0 || shift < -25 || shift > 25) return false;
    
     if (!encode)
     {
       shift = shift * -1;
     }
    
    input = input.toLowerCase(); 
    let encoded = "";

    
    {
      for (let i = 0; i < input.length; i++)
      {
         let char = input[i];
//         console.log(input, shift);
        if (!isLetter(char))
          {
            encoded += char;
          }
        else
        {
            // find current character
         let currChar = input[i];
          // find the character's index in alpha
         let alphaIndex = alpha.indexOf(currChar);
          // use indexOf(()
          // add shift to index
          
       let shiftedIndex = (alphaIndex + shift);
      if (shiftedIndex > 25)
        {
          shiftedIndex = shiftedIndex % 26;
        }
      if (shiftedIndex < 0)
        {
          shiftedIndex += 26;
        }
          
      let translatedChar = alpha[shiftedIndex];  
          encoded += translatedChar;
        }
      }
  
 
    }
    return encoded;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
