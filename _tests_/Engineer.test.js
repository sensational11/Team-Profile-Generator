const Engineer = require("../lib/Engineer");
test("this test is for the engineer portion", ()=>{
const engineer = new engineer("Bobs Burgers", 6879, "bobisthebest@gmail.com", "github");
expect(engineer.github).toEqual(expext.any(string));
expect(engineer.userName).toEqual(expect.any(string));
});