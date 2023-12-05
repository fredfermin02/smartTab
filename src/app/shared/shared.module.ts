import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from '../Pages/pages-routing.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule
  ],
  exports: [
    HeaderComponent
  ]

})
export class SharedModule { }
