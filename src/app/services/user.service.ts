import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { environment } from 'src/environments/environment';

import { RgeisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';


declare const google: any;

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  declare public user: User;
  public status: boolean=false;
  
  constructor(private http: HttpClient,
              private router: Router) {}

  get token(){
    return localStorage.getItem('token') || '';
  }

  get uid():string{
    return this.user.uid || '';
  }

  logout(){
    
    const email = this.user.usersEmail;
    google.accounts.id.revoke(email,()=>{
      localStorage.removeItem('token');
      this.router.navigateByUrl('/home')
      this.status = false;
    })

  }


  createUser(formData:RgeisterForm){
    
    return this.http.post(`${base_url}/auth/register`,formData)
    .pipe(
      tap((resp:any)=>{
        localStorage.setItem('token',resp.token)
        this.status = true;
      })
    );
  }




  loginUser(formData:LoginForm){
    
    return this.http.post(`${base_url}/auth/login`,formData) 
      .pipe(
        map((resp:any)=>{
          const {email, isActive, name, _id,token}= resp.user;
          this.user = new User(name, email, _id )
          localStorage.setItem('token',token)
          this.status = true;
          return true;
        }),
  
        catchError(err => of(false))
        );
  }


}

