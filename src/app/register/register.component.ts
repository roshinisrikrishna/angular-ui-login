import { Component, OnInit } from '@angular/core';
import { UserService } from '../extras/services/user.service';
import { User } from '../extras/classes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userid: string;
  userName: string;
  userPassword: string;
 udob:string;
 umail:string;
  registermessage: string;

  constructor(public userService: UserService,private router:Router) { }

  register() {

    let user: User = {
      id: this.userid,
      name: this.userName,
      password: this.userPassword,
      birthyear:this.udob,
      email:this.umail
    };
    this.userService.createUser(user).then(data=>{
      this.registermessage='REGISTER SUCCESSFUL'
      this.router.navigateByUrl('/profile');

    },error=>{
      this.registermessage='REGISTER FAILED'

    }); 
     

  }

  ngOnInit() {
  }

}
