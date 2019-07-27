import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  path: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { 
  }
  getUsers():Observable<any>{
    return this.http.get(this.path + 'users');
  }
  getUserById(id: number):Observable<any>{
    return this.http.get(this.path + 'users/' + id);
  }
  addUser(user){
    return this.http.post(this.path + '/users/', user);
  }
  updateUser(user){
    let updateUser = {
      name: user.name,
      username: user.username,
      email: user.email
    }
    return this.http.put(this.path + 'users/' + user.id, updateUser);
  }
  deleteUser(id){
    return this.http.delete(this.path + 'users/' + id);
  }
}
