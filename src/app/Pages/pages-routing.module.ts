import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagesComponent } from './pages.component';
import { IndividualMenuComponent } from './individual-menu/individual-menu.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
    {
    path:'',
    component:PagesComponent,
    children:[
      {path:'Home',component:HomePageComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'menu',component: IndividualMenuComponent},
      {path:'thank-you', component: ThankYouComponent},
      {path:'',component:HomePageComponent}
    ]
  }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
