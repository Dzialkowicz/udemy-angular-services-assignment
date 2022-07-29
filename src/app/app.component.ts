import { Component } from '@angular/core';
import { CountService } from './count.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, CountService]
})
export class AppComponent {
  
}
