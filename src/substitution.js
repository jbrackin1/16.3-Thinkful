// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
   const alpha = "abcdefghijklmnopqrstuvwxyz";
  const isLetter = (str) => {
    for (let i = 0; i < str.length; i++)
      {
          const char = str[i].toLowerCase();
          const isLetter = alpha.includes(char);
      }
  }
    
  function substitution(input, alphabet, encode = true) {

  
    // Error handling
    if (!alphabet || alphabet.length != 26) return false;
    for (let i = 0; i < alphabet.length; i++){
      for (let j = i + 1; j < alphabet.length; j++){
        if (alphabet[i] == alphabet[j]) return false;
      }
    }

  
  
  let encryptedMessage = '';

  if(encode === true){
    for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    const isLetter = alpha.includes(char);
  
     if (isLetter === false) {
       encryptedMessage += char;
     }else {
       const charIndex = alpha.indexOf(char);
       const newLetter = alphabet[charIndex];
       encryptedMessage += newLetter
     }
   }
  }
 
  if(!encode){
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      const isLetter = alphabet.includes(char);
  
      if (isLetter === false) {
       encryptedMessage += char;
      }else {
       const charIndex = alphabet.indexOf(char);
       const newLetter = alpha[charIndex];
       encryptedMessage += newLetter
      }
    }
  }

  return encryptedMessage.toLowerCase();
 
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
