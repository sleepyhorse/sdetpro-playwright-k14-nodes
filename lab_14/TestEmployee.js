"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContractEmployee_1 = require("./ContractEmployee");
var EmployeeController_1 = require("./EmployeeController");
var FulltimeEmployee_1 = require("./FulltimeEmployee");
var fullE1 = new FulltimeEmployee_1.default("Full time Employee 1:");
var fullE2 = new FulltimeEmployee_1.default("Full time Employee 2:");
var fullE3 = new FulltimeEmployee_1.default("Full time Employee 3:");
var contractE1 = new ContractEmployee_1.default("Contract Employee 1:");
var contractE2 = new ContractEmployee_1.default("Contract Employee 2:");
var employeeList = [fullE1, fullE2, fullE3, contractE1, contractE2];
console.log("Total salary:");
console.log(EmployeeController_1.default.getSalaryTotal(employeeList));
console.log("Highest Salary: ");
console.log(EmployeeController_1.default.findHighestSalary(employeeList));
console.log("Minimum Salary: ");
console.log(EmployeeController_1.default.findMinimumSalary(employeeList));
console.log("Sort Ascending Salary: ");
console.log(EmployeeController_1.default.sortSalaryAsc(employeeList));
console.log("Sort Descending Salary: ");
console.log(EmployeeController_1.default.sortSalaryDesc(employeeList));
console.log("Sort Ascending Name: ");
console.log(EmployeeController_1.default.sortNameAsc(employeeList));
console.log("Sort Descending Name: ");
console.log(EmployeeController_1.default.sortNameDesc(employeeList));
