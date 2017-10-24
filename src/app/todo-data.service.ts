import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  // Place holder for last id so we can simulate
  // Automatic incrementing of id's
  // tslint:disable-next-line:no-inferrable-types
  lastId: number = 0;

  // PlaceHolder fir todo's
  todos: Todo[] = [];

  constructor() { }

  // Simulate post /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate Delete /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
                      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate Get /todos/:id
  getTodoById(id: number) {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Simulate Get /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    const updateTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updateTodo;
  }

}
