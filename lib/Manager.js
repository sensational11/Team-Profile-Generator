const Employee = require('../lib/Employee');

//the set of data the usre will be passing in
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // get officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    }
    // override parent classes' get role func
    getRole() {
        return 'Manager';
    }
    
}

let newManager = new Manager('bob belcher', 'z83838', 'bob@burger.com', '210')
newManager.getName(); // 'bob belcher'
newManager.getRole(); // 'Manager'

module.exports = Manager;