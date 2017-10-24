// import { NgModule, Component } from '@angular/core';
// import { TodoDataService } from './todo-data.service';
// import { FormsModule } from '@angular/forms';
// import {Todo} from './todo';

// @NgModule({
//   imports: [
//     FormsModule
//   ]
// })

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [TodoDataService]
// })
// export class AppComponent {
//   title = 'app';
//   newTodo: Todo = new Todo();
//   todos: Todo[];

//   // Ask Angular DI system to inject the dependency
//   // associated with the dependency injection token 'TodoDataService'
//   // and assign it to a property called 'todoDataService'
//   constructor(private todoDataService: TodoDataService) {}

//   // service is now available as this.todoDataService
//   toggleTodoComplete(todo) {
//     this.todoDataService.toggleTodoComplete(todo);
//   }

//   addTodo() {
//     this.todoDataService.addTodo(this.newTodo);
//     this.newTodo = new Todo();
//   }

//   removeTodo(todo) {
//     this.todoDataService.deleteTodoById(todo.id);
//   }

//   getTodos() {
//     this.todos = this.todoDataService.getAllTodos();
//     return this.todos;
//   }
// }


import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Employee} from './employee.model';
import {EmployeeService} from './app.service';
import {Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Component({ selector: 'app-root', templateUrl: './app.component.html', providers: [EmployeeService] })

export class AppComponent implements OnInit {
    // 1. Template Ref types
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
    // 2. Other Variables
    message: string;
    employee: Employee;
    selemp: Employee;
    employees: Array<Employee>;
    isNewRecord: boolean;
    statusMessage: string;
    // 3. Constructor injected with the Service Dependency
    constructor(private serv: EmployeeService) {
        this.employees = new Array<Employee>();
        this.message = 'HTML DataGrid using Angular 4';
    }
    // 4. Load all Employees
    ngOnInit() {
        this.loadEmployee();
    }
    private loadEmployee() {
      this.employees = this.serv.getEmployees();
    }
    // 5. Add Employee
    addEmp() {
        this.selemp = new Employee(0, '', 0, '', '');
        this.selemp.EmpNo = this.employees.length > 0 ? this.employees[this.employees.length - 1].EmpNo + 1 : 1;
        this.employees.push(this.selemp);
        this.isNewRecord = true;
    }

    // 6. Edit Employee
    editEmployee(emp: Employee) {
        this.selemp = emp;
    }
    // 7. Load either Read-Onoy Template or EditTemplate
    loadTemplate(emp: Employee) {
        if (this.selemp && this.selemp.EmpNo === emp.EmpNo) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }
    // 8. Save Employee
    saveEmp() {
        if (this.isNewRecord) {
            // add a new Employee
            this.statusMessage = 'Record Added Successfully.',
            this.isNewRecord = false;
            this.selemp = null;
        } else {
            this.statusMessage = 'Record Updated Successfully.',
            this.selemp = null;
        }
    }
    // 9. Cancel edit
    cancel() {
        this.selemp = null;
    }
    // 10 Delete Employee
    deleteEmp(selectedEmp: Employee) {
        this.employees = this.employees.filter((emp: Employee)  => {
            return emp.EmpNo !== selectedEmp.EmpNo;
        });
        this.statusMessage = 'Record Deleted Successfully.';
    }
}
