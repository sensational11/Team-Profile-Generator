const Employee = require("../lib/Employee");
test("this is required testing for Employee portion", () => {
  const employee = new Employee("Mack", 1194, "letsgetcoding@gmail.com");
  expext(employee.name).toEqual;
});
