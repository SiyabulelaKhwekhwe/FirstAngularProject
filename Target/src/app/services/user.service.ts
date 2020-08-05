import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, IUser, singleUser } from '../user';
import { user } from '../components/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  constructor(private httpClient:HttpClient) { }
  
  getusers()
  {
    return this.httpClient.get("http://localhost:8080/users");
  }

  doRegistration(user){
    
    return this.httpClient.post("http://localhost:8080/users",user,{responseType:'text' as 'json'});
  }

  getSpecificUser(username):Observable<any>{
    return this.httpClient.get("http://localhost:8080/users/"+username);
  }
  


}