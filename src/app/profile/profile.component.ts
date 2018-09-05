import { Component, OnInit } from '@angular/core';
import {UserService} from '../extras/services/user.service';
import {User} from '../extras/classes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
updateMessage:string;
deleteMessage:string;
userName:string;
userPassword:string;
udob:string;
uid:string;
umail:string;

  constructor(private userService:UserService,private router:Router ) {

  }

update()
{
//this.updateMessage=`id: ${this.userService.userid} `;
let user:User={
  id:this.userService.userid,
name:this.userName,
password:this.userPassword,
birthyear:this.udob,
email:this.umail

};
this.userService.updateUser(user).then(data=>{
this.updateMessage='UPDATED SUCCESSFULLY';
},error=>{
  this.updateMessage='NOT UPDATED ';

});
}
delete(){
  
this.userService.deleteUser(this.userService.userid).then(data=>{
  this.deleteMessage='DELETED SUCCESSFULLY';
  this.router.navigateByUrl('/login');

},error=>{
  this.deleteMessage='NOT DELETED';
});
  

}

  ngOnInit() {
    this.userName=this.userService.userName;
    this.userPassword=this.userService.userPassword;
    this.udob=this.userService.userdob;
    this.umail=this.userService.usermail;
  }

}
