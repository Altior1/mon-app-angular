import { Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CommonModule, NgFor } from '@angular/common';
import { ToDo } from '../../interface/to-do';

@Component({
  selector: 'app-to-do-list',
  imports: [TodoItemComponent, NgFor],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  toDo1 = {
    id: 1,
    title: "Learn Angular",
    isCompleted: false
  };
  toDo2 = {
    id: 2,
    title: "Build an Angular App",
    isCompleted: false
  };
  toDos: Array<ToDo> = [this.toDo1, this.toDo2];
  public handleDeleteToDo(todoId: number): void {
    alert(`Demande de suppression pour le todo avec l'ID : ${todoId}`);
    // Ici, on mettrait la logique pour supprimer le todo de notre liste.
  }
  public handleToggleToDo(todo: ToDo): void {
    todo.isCompleted = !todo.isCompleted;
  }
}
