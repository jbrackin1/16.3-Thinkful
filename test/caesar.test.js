const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests", () => {
    it("should return false if shift = 0", () => {
      const message = "abcde";
      const shift = 0;
      const actual = caesar(message, shift);
  expect(actual).to.be.false;
    });
  it("should return false if shift < -25", () => {
    const message = "acbde";
    const shift = -26;
    const actual = caesar(message,shift);
    expect(actual).to.be.false;
  });
    it("should return false if shift > 25", () => {
    const message = "acbde";
    const shift = 26;
    const actual = caesar(message,shift);
    expect(actual).to.be.false;
  });
   //check this one
    it("should return false if shift is not present", () => {
    const message = "abcde";
    const shift = null;
    const actual = caesar(message,shift);
    expect(actual).to.be.false;
    });
    it("should treat uppercase and lowercase letters the same", () =>{
    const upMessage = "A message";
    const downMessage = "a message";
    const shift = 2;
    const upCaesar = caesar(upMessage, shift);
    const downCaesar = caesar(downMessage, shift);
    expect(upCaesar).to.equal(downCaesar);
       });
  it("should successfully encode z to be c with a right shift of 3", () => {
   const message = "z";
   const shift = 3;
   const encoded = caesar(message, shift);
    expect(encoded).to.equal("c");
  });
  
  it("should ignore the whitespaces of the original sentence", () => {
    const message = "This is a message";
    const shift = 1;
    const encoded = caesar(message,shift);
    expect(encoded).to.equal( "uijt jt b nfttbhf");
  });
});

       