"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.getSalaryTotal = function (employeeList) {
        return employeeList.reduce(function (accumulator, curValue) { return accumulator + curValue.getSalary(); }, 0);
    };
    EmployeeController.findHighestSalary = function (employeeList) {
        var salaryMax = employeeList.reduce(function (tempMax, employee) {
            return Math.max(tempMax, employee.getSalary());
        }, employeeList[0].getSalary());
        return employeeList.filter(function (employee) { return employee.getSalary() === salaryMax; });
    };
    EmployeeController.findMinimumSalary = function (employeeList) {
        var salaryMax = employeeList.reduce(function (tempMax, employee) {
            return Math.min(tempMax, employee.getSalary());
        }, employeeList[0].getSalary());
        return employeeList.filter(function (employee) { return employee.getSalary() === salaryMax; });
    };
    EmployeeController.sortSalaryAsc = function (employeeList) {
        return employeeList.sort(function (e1, e2) { return (e1.getSalary() - e2.getSalary()); });
    };
    EmployeeController.sortSalaryDesc = function (employeeList) {
        return employeeList.sort(function (e1, e2) { return (e2.getSalary() - e1.getSalary()); });
    };
    EmployeeController.sortNameAsc = function (employeeList) {
        return employeeList.sort(function (a, b) { return a.name.localeCompare(b.name); });
    };
    EmployeeController.sortNameDesc = function (employeeList) {
        return employeeList.sort(function (a, b) { return b.name.localeCompare(a.name); });
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
