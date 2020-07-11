import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import { UserComponent} from '../user/user.component';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent  {
  users: User[];
  constructor(private userService: UserService) {
    this.userService.users().subscribe(value => {
      this.users = value;
      console.log(value);
    });
  }
}
