// 1. Import all dependencies
import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import 'rxjs/Rx';
// 2. The service class
@Injectable()
export class EmployeeService {
    private emp = [
        {
            EmpNo: 1,
            EmpName: 'Anuj',
            Salary: 500000,
            DeptName: 'SE',
            Designation: 'SD'
        },
        {
            EmpNo: 2,
            EmpName: 'Anuj',
            Salary: 500000,
            DeptName: 'SE',
            Designation: 'SD'
        }
    ];
    constructor() { }
    // 5. Function to return the Observable response containing all Employees
    getEmployees() {
        return this.emp;
    }
}
