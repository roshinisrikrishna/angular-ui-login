import { Component } from '@angular/core';
import { UserService } from './extras/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uid:string;
 uname:string;
 upassword:string;
 message:string;
 messageStyle :string;
 showValue:boolean;
 registermessage:string;
 constructor(public userService:UserService){
   
 }

 show(parameter)
 {
   if(parameter==='login')
   {
     this.showValue=false;
    
   }
   else
   {
     this.showValue=true;
   }
   return this.showValue;
 }
 submit(){


this.userService.getUser(this.uid).then(data=>{
  console.log('data at component',data);
if(data.name===this.uname)
{
this.message='Login Successful by ${this.uname}';
}
else
{
  this.message='Invalid user';
}



},error=>{
console.log('error at api',error);
});

 }
 register(){
  if(this.uname!==""&&this.upassword!=="")
  {
    this.registermessage=`Successfully registered by ${this.uname}`;
    this.messageStyle = 'greenText';
  
  }
  else{
    this.registermessage=`Could'nt register`;
    this.messageStyle = 'redText';
  
  
  }
 }
}
