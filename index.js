const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// const generateHTML = require("./src/");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

const managerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "managementName",
      message: "Please enter your name",
    },
    {
      type: "input",
      name: "mangementId",
      message: "Please ener your id",
    },
    {
      type: "input",
      name: "managementEmail",
      message: "Please enter your email",
    },
    {
      type: "input",
      name: "managmentOfficeNumber",
      message: "Please enter your office number",
    }.then((managerData) => {
      const manager = new Manager(
        managerData.managementName,
        managerData.managementId,
        managerData.managementEmail,
        managerData.managementOfficeNumber
      );
      teamMembers.push(manager);
      console.log(manager);
    }),
  ]);
};

managerQuestions();

const engineerMember = [];
const engineerQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Please enter your name",
    },
    {
      type: "input",
      name: "engineerId",
      message: "Please ener your id",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Please enter your email",
    },
    {
      type: "input",
      name: "engineerUserName",
      message: "Please enter your username",
    }.then((engineerData) => {
      const engineer = new Engineer(
        engineerData.engineerName,
        engineerData.engineerId,
        engineerData.engineerEmail,
        engineerData.engineerUserName
      );
      engineerMember.push(engineer);
      console.log(engineer);
    }),
  ]);
};

engineerQuestions();

const internMember = [];
const internQuestions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Please enter your name",
    },
    {
      type: "input",
      name: "internId",
      message: "Please ener your id",
    },
    {
      type: "input",
      name: "internSchool",
      message: "Please enter your school",
    }.then((internData) => {
      const intern = new Intern(
        internData.internName,
        internData.internId,
        internData.internSchool
      );
      internMember.push(intern);
      console.log(intern);
    }),
  ]);
};

internQuestions();
// ask the user for a managers info

// create a list to hold the emp

// ask the user if they want to create an intern an engineer or are they done
