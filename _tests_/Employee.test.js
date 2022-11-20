const Employee = require("../lib/Employee");
// const employee = new Employee("mack", "1194", "lestgetcoding@gmail.com")
test("this is required testing for Employee portion", () => {
  const employee = new Employee("mack", 1194, "letsgetcoding@gmail.com");
  expect(employee.name).toEqual(expect.any(string));
  expect(employee.id).toEqual(expect.any(number));
  expect(employee.email).toContain(expect.any("@"));
});

