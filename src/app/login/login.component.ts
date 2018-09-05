import { Component, OnInit } from '@angular/core';
import { UserService } from '../extras/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uid:string;
 upassword:string;
 
 message:string;

  constructor(public userService:UserService,private router:Router) { }

  submit(){


    this.userService.getUser(this.uid).then(data=>{
      console.log('data at component',data);
    if(data.password===this.upassword)
    {
    this.message=`Login Successful by ${data.name}`;
    this.router.navigateByUrl('/profile');

    }
    else
    {
      this.message='Invalid user';
    }
    
    
    
    },error=>{
    console.log('error at api',error);
    this.message='Invalid user';
    });
     }
     navregister(){
       this.router.navigateByUrl('/register')
     }

  ngOnInit() {
  }

}
