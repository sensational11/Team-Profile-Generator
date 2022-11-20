class Employee {
    // when a user creates and emp they need to give us 3 pieces of data
    constructor(name, id, email) {
        // assign that data to properties of the new obj
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // get name
    getName() {
        return this.name;
    }

    // get Id
    getId() {
        return this.id;
    }

    // get email
    getEmail() {
        return this.email;
    }

    // get role
    getRole() {
        return 'Employee';
    }
}

// examples of how to use it
// let newEmp = new Employee('mack nelson', 'x21345', 'mack@nelson.com');
// console.log(newEmp.getName()); // 'mack nelson'

// export
module.exports = Employee;

