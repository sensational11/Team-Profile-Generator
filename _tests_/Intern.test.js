const Intern = require("../lib/Intern");

//running intern test
test("this is for the intern portion", () => {
  const intern = new Intern("Piccolo", 4578, "piccolothegoat@gmail.com", "Tuskgee University");

  expect(intern.school).toEqual(expect.any(String));
});


