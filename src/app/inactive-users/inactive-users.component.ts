import { Component, OnInit } from '@angular/core';
import { CountService } from '../count.service';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(private usersService: UsersService, private countService: CountService) {}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id)
    this.countService.logInactiveToActiveCount();
  }
}
