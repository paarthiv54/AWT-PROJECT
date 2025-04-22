import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(user:any){
    return this.http.post('http://localhost:2000/login',user,{withCredentials:true})
  }

  signup(user:any) {
    return this.http.post('http://localhost:2000/register',user);
  }
}
