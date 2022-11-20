const Employee = require('../lib/Employee');


class Engineer extends Employee{
    constructor(name, id, email, userName, gitHub){
        super(name, id, email);
        this.gitHub = gitHub
        this.userName = userName;
    }
    getGithub(){
        return `https://github.com/${this.gitHub}`;
    }
    getuserName() {
        return "userName"
    }
    getRole(){
        return 'Engineer';
    }
}
module.exports =Engineer;
