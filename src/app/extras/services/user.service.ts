import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userid: string;
  userName: string;
  userPassword: string;
  userdob: string;
  usermail: string;

  constructor(private httpClient: HttpClient) { }

  //retrieving user details based on input user id from database via api server
  getUser(id: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`http://localhost:3001/login?id=${id}`).subscribe(data => {
        let responseUser = data['user']
        let user: User = { id: responseUser['id'], name: responseUser['name'], password: responseUser['password'], birthyear: responseUser['birthyear'], email: responseUser['email'] };
        this.userid = responseUser['id'];
        this.userName = responseUser['name'];
        this.userPassword = responseUser['password'];
        this.userdob = responseUser['birthyear'];
        this.usermail = responseUser['email'];
        resolve(user);
      },
        error => {
          reject(error);
        });
    });
  }

  //creating user in database through api server
  createUser(user: User): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.post('http://localhost:3001/login', user)
        .subscribe(
          data => {
            this.userid = user.id;
            this.userName = user.name;
            this.userPassword = user.password;
            this.userdob = user.birthyear;
            this.usermail = user.email;
            resolve(true);
          },
          error => {
            console.log("Error AT PROMISE", error);
            reject(false)
          }

        );
    })
  }

  //updating user details in database through api server 
  updateUser(user: User): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.put('http://localhost:3001/login', user).subscribe(
        data => {
          resolve(true);
        },
        error => {
          console.log("Error AT PROMISE", error);
          reject(false)
        }
      )
    })
  }

  //deleting user from database through api server based on user id
  deleteUser(id: string): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(`http://localhost:3001/login?id=${id}`).subscribe(
        data => {
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
