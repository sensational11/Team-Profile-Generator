const Employee = require("../lib/Employee");
// const employee = new Employee("mack", "1194", "lestgetcoding@gmail.com")
//running employee test
test("this is required testing for Employee portion", () => {
  const employee = new Employee("Mack", 1194, "letsgetcoding@gmail.com");
  
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

