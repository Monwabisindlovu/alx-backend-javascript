# 0x00. ES6 Basics

## Overview
This project focuses on understanding and applying basic concepts of ES6 (ECMAScript 6) in JavaScript. It covers various topics such as constants, block-scoped variables, arrow functions, default parameters, rest parameters, spread syntax, string templating, object creation, iterators, and for-of loops.

### Project Details
- Start Date: April 8, 2024, 6:00 AM
- End Date: April 9, 2024, 6:00 AM
- Checker Release Date: April 8, 2024, 12:00 PM
- Auto Review: Will be launched at the deadline

## Resources
Read or watch:
- [ECMAScript 6 - ECMAScript 2015](https://262.ecma-international.org/6.0/)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Javascript ES6 — Iterables and Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

## Learning Objectives
By the end of this project, you should be able to:
- Explain what ES6 is and its new features
- Differentiate between constants and variables
- Understand block-scoped variables
- Use arrow functions and default parameters
- Work with rest and spread function parameters
- Utilize string templating in ES6
- Create objects and manipulate their properties in ES6
- Understand iterators and for-of loops

## Requirements
- All files should be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- Include a README.md file at the root of the project folder
- Code should use the `.js` extension
- Testing will be done using the Jest Testing Framework
- Code will be analyzed using ESLint with specific provided rules
- All functions must be exported

## Setup
1. Install NodeJS 12.11.x:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v
    npm -v
    ```
2. Install Jest, Babel, and ESLint:
    - Navigate to your project directory and run:
    ```bash
    npm install
    ```

## Tasks
### 0. Const or let?
- Modify `taskFirst` to use `const` for variable instantiation
- Modify `taskNext` to use `let` for variable instantiation

### 1. Block Scope
- Modify `taskBlock` function to avoid overwriting variables inside the conditional block

### 2. Arrow functions
- Rewrite `getNeighborhoodsList` function using ES6 arrow syntax

### 3. Parameter defaults
- Condense the internals of `getSumOfHoods` function to 1 line using default parameter values

### 4. Rest parameter syntax for functions
- Modify `returnHowManyArguments` function to return the number of arguments passed using rest parameter syntax

### 5. The wonders of spread syntax
- Concatenate 2 arrays and each character of a string using spread syntax

### 6. Take advantage of template literals
- Rewrite `getSanFranciscoDescription` function to use template literals

### 7. Object property value shorthand syntax
- Modify `getBudgetObject` function to use object property value shorthand syntax

### 8. No need to create empty objects before adding in properties
- Rewrite `getBudgetForCurrentYear` function using ES6 computed property names

### 9. ES6 method properties
- Rewrite `getFullBudgetObject` function to use ES6 method properties in the `fullBudget` object

### 10. For...of Loops
- Rewrite `appendToEachArrayValue` function using ES6's `for...of` operator

### 11. Iterator
- Write a function `createEmployeesObject` to return an object mapping department names to employees

### 12. Let's create a report object
- Write a function `createReportObject` to return an object containing department names and a method to get the number of departments

### 13. Iterating through report objects
- Write a function `createIteratorObject` to return an iterator to go through every employee in every department

### 14. Iterate through object
- Write a function `iterateThroughObject` to return every employee name in a string, separated by '|'

## Conclusion
This project provides hands-on experience with ES6 features in JavaScript, helping to solidify understanding and proficiency in modern JavaScript development.

