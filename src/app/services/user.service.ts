import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';

import { RgeisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login.interface';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


declare const google: any;

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  declare public user: User;


  private authStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public authStatus$: Observable<boolean> = this.authStatusSubject.asObservable();

  private userSubject: BehaviorSubject<User> = new BehaviorSubject<any>(null);
  public user$: Observable<User> = this.userSubject.asObservable();

  setUser(user:any): void {
    this.userSubject.next(user);
  }

  getUser(): User {
    return this.userSubject.value;
  }

  setAuthStatus(status: boolean): void {
    this.authStatusSubject.next(status);
  }

  getAuthStatus(): boolean {
    return this.authStatusSubject.value;
  }
  
  constructor(private http: HttpClient,
              private router: Router) {}

  get token(){
    return localStorage.getItem('token') || '';
  }

  get uid():string{
    return this.user.uid || '';
  }

  logout(){
      localStorage.removeItem('token');
      this.router.navigateByUrl('/home')
  }


  createUser(formData:RgeisterForm){
    
    return this.http.post(`${base_url}/auth/register`,formData)
    .pipe(
      tap((resp:any)=>{
        localStorage.setItem('token',resp.token)

      })
    );
  }




  loginUser(formData:LoginForm){
    
    return this.http.post(`${base_url}/auth/login`,formData) 
      .pipe(
        map((resp:any)=>{
          const {email, isActive, name, _id,token}= resp.user;
          const user = new User(name, email, _id )
          localStorage.setItem('token',token)

          return user;
        }),
  
        catchError(err => of(false))
        );
  }


}

