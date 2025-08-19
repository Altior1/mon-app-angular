import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compt/header/header.component';
import { UserCardComponentComponent } from './compt/user-card-component/user-card-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserCardComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-app';

}
