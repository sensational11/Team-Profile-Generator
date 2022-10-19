const Intern = require("../lib/Intern.js");

test("this test is for the intern portion", () => {
  const intern = new intern(
    "Piccolo",
    4578,
    "piccolothegoat@gmail.com",
    "Tuskgee University "
  );
  expect(intern.school).toEqual(expext.any(string));
});
