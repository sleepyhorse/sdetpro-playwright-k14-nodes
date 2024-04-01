import Employee from "./Employee";

export default class FulltimeEmployee extends Employee {
    static fullTimetSal = 5000;
    constructor(name: string) {
        super(name, FulltimeEmployee.fullTimetSal)
    }
}