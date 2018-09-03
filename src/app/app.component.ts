import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 uname:string;
 upassword:string;
 message:string;
 messageStyle :string;
 showValue:boolean;
 registermessage:string;
 constructor(){
   this.uname="";
   this.upassword="";
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
if(this.uname!=="")
{
  this.message=`Successfully logged in by ${this.uname}`;
  this.messageStyle = 'greenText';

}
else{
  this.message=`Could'nt log in `;
  this.messageStyle = 'redText';


}
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
