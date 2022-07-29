import { Component, OnInit} from '@angular/core';
import { CountService } from '../count.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private usersService: UsersService, private countService: CountService) {}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id)
    this.countService.logActiveToInactiveCount();
  }
}
