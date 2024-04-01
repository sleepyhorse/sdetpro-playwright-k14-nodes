import Employee from "./Employee";


export default class ContractEmployee extends Employee {
    static contractSal = 4000;
    constructor(name: string) {
        super(name, ContractEmployee.contractSal)
    }
}