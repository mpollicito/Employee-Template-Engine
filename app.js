const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function askQuestion() {
    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What type of employee do you want to add?",
            choices: [
                "Engineer",
                "Intern",
                "Manager",
                "Done"
            ]
        }
    ]).then(function(answer){
        switch(answer.userChoice) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;
            case "Manager":
                addManager()
                break;  
            default:
                buildTeam()       
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your Engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your Engineer's ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your Engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your Engineer's GitHub account?"
        },
    ]).then(function(answers){
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        console.log(engineer);
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your Intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is your Intern's ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your Intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does your Intern currently attend?"
        },
    ]).then(function(answers){
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        console.log(intern);
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your Manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your Manager's ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your Manager's email?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is your Manager's Office Number?"
        },
    ]).then(function(answers){
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        console.log(manager);
    })
}

askQuestion();
addEngineer();
addIntern();
addManager();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
