import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoProvider {
  private todos: string[] = [];
  private archivedTodos: string[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  archiveTodo(todoIndex: number) {
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }

  editTodo(todoIndex: number, newTodo: string) {
    this.todos[todoIndex] = newTodo;
  }

  getTodos() {
    return this.todos;
  }

  getArchivedTodos() {
    return this.archivedTodos;
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

}
