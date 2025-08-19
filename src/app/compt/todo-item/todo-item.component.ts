import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../interface/to-do';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: ToDo;
  @Output() deleteToDo: EventEmitter<number> = new EventEmitter<number>();
  public onDeleteClick(): void {
    console.log("Delete request for todo:", this.todo);
    this.deleteToDo.emit(this.todo.id);
  }
  @Output() toggleToDo: EventEmitter<ToDo> = new EventEmitter<ToDo>();
  public onToggleClick(): void {
    console.log("Toggle request for todo:", this.todo);
    this.toggleToDo.emit(this.todo);
  }

}
