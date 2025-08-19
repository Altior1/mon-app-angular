import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compt/header/header.component';
import { UserCardComponentComponent, User } from './compt/user-card-component/user-card-component.component';
import { ToDoListComponent } from './compt/to-do-list/to-do-list.component';
import { TodoItemComponent } from './compt/todo-item/todo-item.component';
import { DigitalProduct, PhysicalProduct } from './classe/enum';
import { ProductCardComponent } from './compt/product-card/product-card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserCardComponentComponent, ToDoListComponent, TodoItemComponent, ProductCardComponent, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-app';
  public mainUser: User = {
    id: 1,
    name: "John Doe",
    jobTitle: "Software Engineer",
    avatarUrl: "https://i.pravatar.cc/150",
    quote: "Code is like humor. When you have to explain it, it’s bad."
  };

  public handleUserDelete(userId: number): void {
    alert(`Le parent a reçu une demande de suppression pour l'utilisateur avec l'ID : ${userId}`);
    // Ici, on mettrait la logique pour supprimer l'utilisateur de notre liste.
  }



}
