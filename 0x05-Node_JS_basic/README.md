0x05. NodeJS Basics
Project Overview
This project introduces the basics of Node.js, a powerful JavaScript runtime built on Chrome's V8 engine, and Express.js, a minimal and flexible Node.js web application framework. Through various tasks, you will learn how to create and manage HTTP servers, read files synchronously and asynchronously, use modules, and utilize advanced routing with Express.js. The project also emphasizes best practices for modern JavaScript using ES6 features and development tools like Babel and Nodemon.

Learning Objectives
By the end of this project, you should be able to:

Run JavaScript using Node.js.
Use Node.js modules.
Read files using specific Node.js modules.
Access command line arguments and environment variables using the process module.
Create a small HTTP server using Node.js.
Create a small HTTP server using Express.js.
Implement advanced routing with Express.js.
Use ES6 features with Node.js through Babel.
Use Nodemon for faster development.
Requirements
Allowed editors: vi, vim, emacs, Visual Studio Code.
Your files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js version 12.x.x.
Each file should end with a new line.
A README.md file at the root of the project is mandatory.
Your code should use the .js extension.
Your code will be tested using Jest and the command npm run test.
Your code will be verified against lint using ESLint.
Your code needs to pass all tests and lint checks (npm run full-test).
All functions/classes must be exported using the format: module.exports = myFunction.
Project Directory Structure

0x05-Node_JS_basic/
├── database.csv
├── 0-console.js
├── 1-stdin.js
├── 2-read_file.js
├── 3-read_file_async.js
├── 4-http.js
├── 5-http.js
├── 6-http_express.js
├── 7-http_express.js
├── full_server/
│   ├── utils.js
│   ├── controllers/
│   │   ├── AppController.js
│   │   └── StudentsController.js
│   ├── routes/
│   │   └── index.js
│   └── server.js
├── babel.config.js
├── .eslintrc.js
├── package.json
└── README.md
