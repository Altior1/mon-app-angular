import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


export interface User {
  id: number;
  name: string;
  jobTitle: string;
  avatarUrl: string;
  quote: string;
}

@Component({
  selector: 'app-user-card-component',
  imports: [FormsModule],
  templateUrl: './user-card-component.component.html',
  styleUrl: './user-card-component.component.css'
})
export class UserCardComponentComponent {
  @Input() user!: User;
  @Output() public deleteRequest = new EventEmitter<number>();
  public onDeleteClick() {
    console.log("Delete request for user:", this.user);
    this.deleteRequest.emit(this.user.id);
  }
}


