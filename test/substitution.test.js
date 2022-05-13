const {expect} = require('chai');
const { substitution } = require("../src/substitution");

describe("Substitution() tests ", ()=> {
  it("It returns false if the given alphabet isn't exactly 26 characters long.", ()=>{
    const expected = false;
    const actual = substitution("abc", "aasdfslkdjfalskdj");
    expect(actual).to.equal(expected);
  });
  
  it("It correctly translates the given phrase, based on the alphabet given to the function.", ()=>{
     const expected = "ykrrpik";
     const actual =  substitution("message", "plmoknijbuhvygctfxrdzeswaq");
    expect(actual).to.equal(expected);
     });
  
  it("returns false if there are any duplicate characters in the given alphabet.", ()=>{
    const actual = substitution("abcd", "abbdefghijklmnopqrstuvwxyz");
    expect(actual).to.be.false;
  });
  
  it("It maintains spaces in the message, before and after encoding or decoding.", ()=> {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'elp xhm xf mbymwwmfj dne';
    expect(actual).to.equal(expected);
  });
  
  it("should treat uppercase and lowercase letters the same", () =>{
    const upMessage = "A message";
    const downMessage = "a message";
    const upSub = substitution(upMessage, "xoyqmcgrukswaflnthdjpzibev");
    const downSub = substitution(downMessage, "xoyqmcgrukswaflnthdjpzibev");
    expect(upSub).to.equal(downSub);
  });
  
})