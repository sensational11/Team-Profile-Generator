const { hasUncaughtExceptionCaptureCallback } = require("process");
const Manager = require("../lib/Manager");

test("this test is for the manager portion", () =>{
    const manager = new manager("Benson" , 1523, "bensonrocks@gmail.com", "Flordia Tech");
    hasUncaughtExceptionCaptureCallback(manager.officeNumber).toEqul(expect.any(string));
})