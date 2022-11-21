
const Engineer = require("../lib/Engineer");
test("this test is for the engineer portion", () => {
const engineer = new Engineer("Bobs Burgers", 6879, "bobisthebest@gmail.com", "github");

expect(engineer.gitHub).toEqual(expect.any(String));
// expect(engineer.github).toEqual(expect.any(String));

});


// const Engineer = require("../lib/Engineer");

// test("this test is for the engineering portion", () => {
//     const Engineer = new Engineer("Bobs Burgers", 6879, "bobisthebest@gmail.com", "github");

//     expect(Engineer.gitHub).toEqual(expect.any(String));
// })