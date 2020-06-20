const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray = [];
let id = 0;

//inquirer used to prompt questions to gather info for db
function createEmployee() {
  inquirer
    .prompt([
      {
        name: "type",
        message: "What's the employee's position to add:",
        type: "list",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        name: "name",
        message: "Employee's Name:",
        type: "input",
      },
      {
        name: "email",
        message: "Employee's email:",
        type: "input",
      },
      {
        name: "office",
        message: "Manager's office number:",
        type: "input",
        when: (answers) => answers.type === "Manager",
      },
      {
        name: "github",
        message: "Enter engineer's Github username:",
        type: "input",
        when: (answers) => answers.type === "Engineer",
      },
      {
        name: "school",
        message: "Enter intern's School name:",
        type: "input",
        when: (answers) => answers.type === "Intern",
      },
    ])
    //organizes data from inquirer and places with respect to its postion and info in dc
    .then((res) => {
      if (res.type === "Manager") {
        employeeArray.push(new Manager(res.name, id, res.email, res.office));
        id++;
      } else if (res.type === "Engineer") {
        employeeArray.push(new Engineer(res.name, id, res.email, res.github));
        id++;
      } else if (res.type === "Intern") {
        employeeArray.push(new Intern(res.name, id, res.email, res.school));
        id++;
      }
      //second prompt to add more to db else populates into a listed directory via HTML format for visual
      inquirer
        .prompt({
          name: "addMore",
          message: "Done!\nAdd another employee?",
          type: "confirm",
        })
        .then((res) => {
          if (res.addMore) {
            createEmployee();
          } else {
            const data = render(employeeArray);
            fs.writeFile("./output/team.html", data, (err) => {
              if (err) {
                throw err;
              } else {
                console.log("Saved!");
              }
            });
          }
        });
    });
}

createEmployee();
