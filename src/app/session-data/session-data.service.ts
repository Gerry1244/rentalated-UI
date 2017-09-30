import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../User';
import { Http } from "@angular/http";
import { Subject } from "rxjs/Subject";

import 'rxjs/add/operator/do';

@Injectable()
export class SessionDataService {

  baseUrl = 'http://localhost:4567/api/sessions';
  options = { withCredentials: true };

  userChanged: Subject<User>;
  currentUser: Subject<User>;

  constructor(private http: Http) {
    this.userChanged = new Subject<User>();
  }

  login(email: string, password: string): Observable<User> {
    const payload = { email, password };
    return this.http
      .post(this.baseUrl, payload, this.options)
      .map(response => response.status === 201 ? response.json() : null)
      .do(user => this.userChanged.next(user))
    .do (user => this.currentUser = (user));
}


  logout(): Observable<User> {
    return this.http
      .delete(`${this.baseUrl}/mine`)
      .map(response => null)  //TODO: come back and finish the failure
      .do(user => this.userChanged.next(user));
  }

  getUser(): Observable<User> {
    return this.http.get
    (this.baseUrl)
    .map(response => response.json())
      .do(currentUser => this.currentUser = currentUser);

  }
}
 
