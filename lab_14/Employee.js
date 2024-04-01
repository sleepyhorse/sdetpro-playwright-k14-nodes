"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    return Employee;
}());
exports.default = Employee;
