# HWK 08 - OOP Homework: Template Engine - Employee Summary

---

## Description

One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, _how_ we design our code is just as important as the code itself. In this homework assignment, your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.

#### Author(s)

![user's avatar](https://avatars3.githubusercontent.com/u/58826890?v=4)<br>
user: [ichoi21](https://github.com/ichoi21) | email: ic@g.co | repos: [Click Here](https://github.com/ichoi21?tab=repositories)

---

### Contents

```
You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

---
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

How do you deliver this? Here are some guidelines:

- Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

- Your app will run as a Node CLI to gather information about each employee.

- Below is an example of what your application may look like. Remember, the styling is completely up to you so try to make it unique.

![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)

### Minimum Requirements

- Functional application.
- GitHub repository with a unique name and a README describing the project.
- User can use the CLI to generate an HTML page that displays information about their team.
- All tests must pass.

### Classes

The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

- name
- id
- email
- getName()
- getId()
- getEmail()
- getRole() // Returns 'Employee'

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have:

- officeNumber
- getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

- github // GitHub username
- getGithub()
- getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

- school
- getSchool()
- getRole() // Overridden to return 'Intern'

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

- Name
- Role
- ID
- Role-specific property (School, link to GitHub profile, or office number)

### How to install

Perform the following: npm install -y, +inquirer, +jest

### Intended Usage

To be able to create a user input prompt the user to build a database of assorted employees using
