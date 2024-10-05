import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTodo: string = '';
  todos: Todo[] = [];
  nextId: number = 1;

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todos.push({
        id: this.nextId++,
        title: this.newTodo.trim(),
        completed: false
      });
      this.newTodo = '';
    }
  }

  toggleCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
