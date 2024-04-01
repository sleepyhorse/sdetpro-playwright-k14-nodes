import ContractEmployee from "./ContractEmployee";
import EmployeeController from "./EmployeeController";
import FulltimeEmployee from "./FulltimeEmployee";

const fullE1 = new FulltimeEmployee("FE1")
const fullE2 = new FulltimeEmployee("FE2")
const fullE3 = new FulltimeEmployee("FE3")
const contractE1 = new ContractEmployee("CE1")
const contractE2 = new ContractEmployee("CE2")

const employeeList = [fullE1, fullE2, fullE3, contractE1, contractE2]

console.log(EmployeeController.getSalaryTotal(employeeList));
 
console.log(EmployeeController.findHighestSalary(employeeList));

console.log(EmployeeController.findMinimumSalary(employeeList));

console.log(EmployeeController.sortSalaryAsc(employeeList));

console.log(EmployeeController.sortSalaryDesc(employeeList));

console.log(EmployeeController.sortNameAsc(employeeList));

console.log(EmployeeController.sortNameDesc(employeeList));
