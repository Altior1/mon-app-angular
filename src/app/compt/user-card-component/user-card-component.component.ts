import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card-component',
  imports: [FormsModule],
  templateUrl: './user-card-component.component.html',
  styleUrl: './user-card-component.component.css'
})
export class UserCardComponentComponent {
  public name: string = "John Doe";
  public jobTitle: string = "Software Engineer";
  public avatarUrl: string = "https://i.pravatar.cc/150";
  public quote: string = "Code is like humor. When you have to explain it, it’s bad.";
}
