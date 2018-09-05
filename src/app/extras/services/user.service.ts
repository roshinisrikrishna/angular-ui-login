import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resolve, URLSearchParams } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userid:string;
userName:string;
userPassword:string;
userdob:string;
usermail:string;
  constructor(private httpClient: HttpClient) { }

  getUser(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`http://localhost:3001/login?id=${id}`).subscribe(data => {
        let responseUser = data['user']
        let user: User = { id: responseUser['id'], name: responseUser['name'], password: responseUser['password'],birthyear:responseUser['birthyear'],email:responseUser['email'] };
        console.log('response at api ', responseUser, user);
        this.userid=responseUser['id'];
        this.userName=responseUser['name'];
        this.userPassword=responseUser['password'];
        this.userdob=responseUser['birthyear'];
        this.usermail=responseUser['email'];
        resolve(user);
      },
        error => {
          reject(error);
        });
    });
  }
  createUser(user: User): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      console.log('User', user)
     
      this.httpClient.post('http://localhost:3001/login', user)
        .subscribe(
          data => {
            console.log("POST Request is successful ", data);
            this.userid=user.id;
       this.userName=user.name;
       this.userPassword=user.password;
       this.userdob=user.birthyear;
       this.usermail=user.email;
            resolve(true);
          },
          error => {
            console.log("Error AT PROMISE", error);
            reject(false)
          }
  
        );
    })
   }
   updateUser(user: User):Promise<Boolean>{
     return new Promise((resolve,reject)=>{
       this.httpClient.put('http://localhost:3001/login',user).subscribe(
        data => {
          console.log("PUT Request is successful ", data);
          resolve(true);
        },
        error => {
          console.log("Error AT PROMISE", error);
          reject(false)
        }
       )
     })
   }
   deleteUser(id:string):Promise<Boolean>{
     return new Promise((resolve,reject)=>{
       this.httpClient.delete(`http://localhost:3001/login?id=${id}`).subscribe(
        data => {
          console.log("DELETE Request is successful ", data);
          resolve(true);
        },
        error => {
          console.log("Error AT PROMISE", error);
          reject(false)
        }
       )    
     })
   }
}
