const Employee = require('../lib/Employee');

//the set of data the usre will be passing in
class Intern extends Employee{
    constructor(name, id,email,school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;
