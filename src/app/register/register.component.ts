import { Component, OnInit } from '@angular/core';
import { UserService } from '../extras/services/user.service';
import { User } from '../extras/classes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userid: string;
  userName: string;
  userPassword: string;
  udob: string;
  umail: string;
  registermessage: string;

  constructor(private userService: UserService, private router: Router) { }

  //function for register button
  register() {
    let user: User = {
      id: this.userid,
      name: this.userName,
      password: this.userPassword,
      birthyear: this.udob,
      email: this.umail
    };
    //using userService for creating a user with those details in database
    this.userService.createUser(user).then(data => {
      //after registration navigate to profile page
      this.router.navigateByUrl('/profile');
    }, error => {
      //if user already exists
      this.registermessage = 'USER ALREADY EXISTS OR REQUIRED FIELDS ARE NOT FILLED'
    });
  }

  //function for sign out button
  sign_out() {
    //navigate to login page
    this.router.navigateByUrl('/login');
  }
}
