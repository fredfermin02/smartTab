import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CheckoutComponent } from './checkout/checkout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { IndividualMenuComponent } from './individual-menu/individual-menu.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    PagesComponent,
    CheckoutComponent,
    HomePageComponent,
    IndividualMenuComponent,
    ThankYouComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    PagesComponent,
    CheckoutComponent,
    HomePageComponent
  ]
})
export class PagesModule { }
