import Employee from "./Employee";

export default class EmployeeController {
    static getSalaryTotal(employeeList: NonNullable<Employee[]>): number {
        return employeeList.reduce((accumulator, curValue) => accumulator + curValue.getSalary(), 0)
    }

    static findHighestSalary(employeeList: NonNullable<Employee[]>): Employee[]{    
        let salaryMax = employeeList.reduce((tempMax, employee) => 
            Math.max(tempMax, employee.getSalary()), employeeList[0].getSalary());
        return  employeeList.filter(employee => employee.getSalary() ===  salaryMax);
    }

    static findMinimumSalary(employeeList: NonNullable<Employee[]>): Employee[]{    
        let salaryMax = employeeList.reduce((tempMax, employee) => 
            Math.min(tempMax, employee.getSalary()), employeeList[0].getSalary());
        return  employeeList.filter(employee => employee.getSalary() ===  salaryMax);
    }

    static sortSalaryAsc(employeeList: NonNullable<Employee[]>): Employee[]{
        return employeeList.sort( (e1:Employee, e2: Employee) => (e1.getSalary() - e2.getSalary()));
    }

    static sortSalaryDesc(employeeList: NonNullable<Employee[]>): Employee[]{
        return employeeList.sort( (e1:Employee, e2: Employee) => (e2.getSalary() - e1.getSalary()));
    }

    static sortNameAsc(employeeList: NonNullable<Employee[]>): Employee[]{
        
        return employeeList.sort((a, b) => a.name.localeCompare(b.name))
    }

    static sortNameDesc(employeeList: NonNullable<Employee[]>): Employee[]{
        return employeeList.sort((a, b) => b.name.localeCompare(a.name))
    }
}