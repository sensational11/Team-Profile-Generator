const Employee = require('./Employee');
class Manager extends Employee {
    constructor(_name, _id, _email, _officeNumber) {
        super(_name, _id, _email);
        this.officeNumber = _officeNumber;
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