export default class Employee {
    salary: number;
    name: string;
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number) {
        this.salary = salary;
    }
}