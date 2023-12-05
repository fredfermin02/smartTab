import { Component, OnInit, Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  buttonClicked = false;
  private subscription: Subscription;




  ngOnInit() {
    
  }
  constructor(private sharedService: SharedService, 
              private el: ElementRef, 
              private renderer: Renderer2,
              private router:Router,
              private fb: FormBuilder,
    private userService: UserService,

) {
    this.subscription = this.sharedService.buttonClick$.subscribe(() => {
      console.log(this.buttonClicked);
      this.togglePopup(sharedService.popupToShow);
    });
  }

// //============================Login=====================================
  public loginForm:FormGroup = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  });

  login(){
    console.log(this.loginForm.value)
    this.userService.loginUser(this.loginForm.value).subscribe({
      next: resp => {
        console.log(resp)
        this.router.navigateByUrl('/')
      },
      error: (e) => {
        //If error happens
        Swal.fire('Error', e.error.msg, 'error');
      }
    })
  }
//============================End-Login=====================================
  
//============================Register=====================================
public regFormSubmitted = false;

  public registerForm = this.fb.group({
    name:['fred', [Validators.required]],
    email:['fred@gmail.com', [Validators.required, Validators.email]],
    password:['11111', [Validators.required]],
    password2:['11111', [Validators.required]],
    termsAndConditions:[true, [Validators.required]],
  },{
    validators: this.samePassword('password','password2')
  });

  samePassword(pass1Name: string, pass2Name: string){
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name)
      const pass2Control = formGroup.get(pass2Name)
      
      if (pass1Control?.value===pass2Control?.value){
        pass2Control?.setErrors(null)
      }else{
        pass2Control?.setErrors({noEsIgual:true})
      }
    }
  }

  createUser(){
    this.regFormSubmitted = true;
    console.log(this.registerForm.value)

    if (this.registerForm.invalid) {
      return;
    }
    //Make post to create user
    this.userService.createUser(this.registerForm.value)
    .subscribe(
      {
        next: () => (
          this.router.navigateByUrl('/'),
          console.log('klk')),
          
        error: (e) => {
          //If error happens
          Swal.fire('Error', e.error.msg, 'error')
        },
      }
    )

  }

//============================End-Register=====================================

  togglePopup(elementByClass: string){
    const blur = document.getElementById('blur');
    this.renderer.addClass(blur, 'active'); 


    const element = this.el.nativeElement.querySelector(elementByClass);
    this.renderer.addClass(element, 'active'); 
  }

  close(elementByClass: string) {
    
    const blur = document.getElementById('blur');
    this.renderer.removeClass(blur, 'active'); 


    const element = this.el.nativeElement.querySelector(elementByClass);
    this.renderer.removeClass(element, 'active'); 
  }

}
