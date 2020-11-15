## 1. Install JSON-SERVER with npm install -g json-server
## 2. Run "npm run server"
## 3. Run "npm start"

# Tick42's JavaScript Pre-Interview Task

## DON'T PANIC!

Hello there and welcome to Tick42's pre-interview task assignment.

Before we start, we want to thank you for your interest in Tick42 and for making the time to work on this task as part of your adventure to become one of us!

In the `data` folder you will find four JSON files:

```
- companies.json
- company-addresses.json
- employees.json
- projects.json
```

You will use them to build a small app.

### App requirements

- Use the company and employees data to build a tree view like navigation with the following structure:

```
Company name
    Employee job area
        Employee name
```

- When the user clicks on a company, the app should display the company's address and the company's projects (use `projects.json`). 
- It should be possible to visualize the information about each project as well as to manage the projects: edit project details 
	(changing the project name) and assigning & removing employees from a project. 
- If you feel that's too easy, you can add the ability to add and remove projects
- When the user clicks on an employee's name you will need to show the employee's details, and projects they're part of.
- Clicking on Employee's job area should only display how many employees work in that area, and the number of projects they participate in.

### Tech requirements

- The app should be developed using whichever framework you're most comfortable with - React or Angular (but not Angular 1.x). You can start from scratch, from a boilerplate project or use a scaffolding CLI.
- You can use ES5+ or TypeScript and any supporting libraries (e.g. Lodash, Ramda, RxJS, etc.) you need.
- The code needs to demonstrate state management within the app as well as managing asynchronous requests.
- In terms of serving the static JSON files upon app requests, it's up to you whether to create a dev server or use an existing package.
- The app's aesthetics are up to you - you can use Bootstrap, Material or custom CSS.
- We should be able to run your solution by simply unzipping it and running a single command on the command line.

### Getting started

Download the attached .zip file with the JSON files and start your journey. Don't forget to save your work before sending us your masterpiece.

Good luck and happy hacking!

