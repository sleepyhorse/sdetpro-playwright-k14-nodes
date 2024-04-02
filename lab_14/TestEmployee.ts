import ContractEmployee from "./ContractEmployee";
import EmployeeController from "./EmployeeController";
import FulltimeEmployee from "./FulltimeEmployee";

const fullE1 = new FulltimeEmployee("Full time Employee 1:")
const fullE2 = new FulltimeEmployee("Full time Employee 2:")
const fullE3 = new FulltimeEmployee("Full time Employee 3:")
const contractE1 = new ContractEmployee("Contract Employee 1:")
const contractE2 = new ContractEmployee("Contract Employee 2:")

const employeeList = [fullE1, fullE2, fullE3, contractE1, contractE2]
console.log("Total salary:");
console.log(EmployeeController.getSalaryTotal(employeeList));
console.log("Highest Salary: ");
console.log(EmployeeController.findHighestSalary(employeeList));
console.log("Minimum Salary: ");
console.log(EmployeeController.findMinimumSalary(employeeList));
console.log("Sort Ascending Salary: ");
console.log(EmployeeController.sortSalaryAsc(employeeList));
console.log("Sort Descending Salary: ");
console.log(EmployeeController.sortSalaryDesc(employeeList));
console.log("Sort Ascending Name: ");
console.log(EmployeeController.sortNameAsc(employeeList));
console.log("Sort Descending Name: ");
console.log(EmployeeController.sortNameDesc(employeeList));
