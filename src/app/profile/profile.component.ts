import { Component, OnInit } from '@angular/core';
import { UserService } from '../extras/services/user.service';
import { User } from '../extras/classes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  updateMessage: string;
  deleteMessage: string;
  userName: string;
  userPassword: string;
  userdob: string;
  userId: string;
  userMail: string;

  constructor(private userService: UserService, private router: Router) { }

  //initialize the values of input boxes of profile page with user details
  ngOnInit() {
    this.userName = this.userService.userName;
    this.userPassword = this.userService.userPassword;
    this.userdob = this.userService.userdob;
    this.userMail = this.userService.usermail;
  }

  //function for update button
  update() {
    let user: User = {
      id: this.userService.userid,
      name: this.userName,
      password: this.userPassword,
      birthyear: this.userdob,
      email: this.userMail
    };
    //using userService to update the data in the database via api server
    this.userService.updateUser(user).then(data => {
      this.updateMessage = 'UPDATED SUCCESSFULLY';
    }, error => {
      this.updateMessage = 'NOT UPDATED ';
    });
  }

  //function for delete button
  delete() {
    //using userService to delete the user based on user id in the database
    this.userService.deleteUser(this.userService.userid).then(data => {
      //after delete operation navigate to login page
      this.router.navigateByUrl('/login');
    }, error => {
      this.deleteMessage = 'NOT DELETED';
    });
  }

  //function for sign out button
  sign_out() {
    //navigate to login page
    this.router.navigateByUrl('/login');
  }
}
