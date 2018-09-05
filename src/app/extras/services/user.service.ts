import { Injectable } from '@angular/core';
import { User } from '../classes/User';
 import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  
getUser(id:string):Promise<User>{
  return new Promise((resolve,reject)=>{
    this.httpClient.get('http://localhost:3001/documentation').subscribe(response=>{
      console.log('response at api ',response);
let user :User={id:response['id'],name:response['uname'],password:response['password']};
resolve(user);
    },
  error=>{
reject(error);
  });
  });
}

}
