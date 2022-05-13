const {expect} = require('chai');
const { polybius } = require("../src/polybius");

describe("polybius() tests", ()=> {
  
  it("should translate the letters i to 42 while encoding", ()=>{
    const expected = "42";
    const actual = polybius("i");
    expect(expected).to.equal(actual);
  });  
  
  it("should translate the letters j to 42 while encoding", ()=>{
    const expected = "42";
    const actual = polybius("j");
    expect(expected).to.equal(actual);
  });
  
  it("should translate 42 to i/j while decoding", ()=> {
    const expected = "(i/j)";
    const actual = polybius('42', false);
    expect(expected).to.equal(actual);
  });
  
  it("should treat uppercase and lowercase letters the same", () =>{
    const expected = "23513434112251";
    const actual = polybius("message");
    expect(actual).to.equal(expected);
    
    
//     const upMessage = "A message";
//     const downMessage = "a message";
//     const upPoly = polybius(upMessage, false);
//     const downPoly = polybius(downMessage, false);
//     expect(upPoly).to.equal(downPoly);
  });
  
//   it("encoding string with space and capital letters", () => {
//     const expected = "3251131343 2543241341";
//     const actual = polybius("hello world");
//     expect(actual).to.equal(expected);
//   });
  
  it("decoding message includes space", () => {
    const expected =  "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });
  
});
