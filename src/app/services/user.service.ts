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
      this.router.navigateByUrl('/login')
    })

  }

  validateToken(): Observable<boolean>{
    const token=localStorage.getItem('token') || '';

    google.accounts.id.initialize({
      client_id: "963655461253-c8093cl2mrq0b8ad7lq5slqe3ov5130g.apps.googleusercontent.com",
    });

    return this.http.get(`${base_url}/login/renew`,
    {headers:{
      'x-token':this.token
      }
    }).pipe(
      map((resp:any)=>{
        const {email, google, name, role, uid, img=''}= resp.user;
        this.user = new User(name, email, '', img,google,role,uid )
        localStorage.setItem('token',token)
        return true;
      }),

      catchError(err => of(false))
      );9
  }

  createUser(formData:RgeisterForm){
    
    return this.http.post(`${base_url}/auth/register`,formData)
    .pipe(
      tap((resp:any)=>{
        localStorage.setItem('token',resp.token)
      })
    );
  }

  updateProfile(data: {email:string, name:string, role?:string}){
    data = {
      ...data,
      role: this.user.role
    }

    return this.http.put(`${base_url}/users/${this.uid}`,data,{headers:{
      'x-token':this.token
      }})
  }

  loginUser(formData:LoginForm){
    
    return this.http.post(`${base_url}/auth/login`,formData) 
      .pipe(
        tap((resp:any)=>{
          localStorage.setItem('token',resp.token)
        })
      );
  }


}

