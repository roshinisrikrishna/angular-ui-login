import { Component, OnInit } from '@angular/core';
import { UserService } from '../extras/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uid: string;
  upassword: string;
  message: string;

  constructor(public userService: UserService, private router: Router) { }

  //function for login button
  submit() {
    //using userService to validate userpassword by retrieving data from api server
    this.userService.getUser(this.uid).then(data => {
      if (data.password === this.upassword) {
        //after login navigate to profile page
        this.router.navigateByUrl('/profile');
      }
      else {
        this.message = 'Invalid user';
      }
    }, error => {
      console.log('error at api', error);
      this.message = 'Invalid user';
    });
  }

  //function for navigating to register page
  navregister() {
    this.router.navigateByUrl('/register')
  }
}
