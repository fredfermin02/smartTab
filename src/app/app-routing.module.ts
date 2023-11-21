import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './Pages/pages-routing.module';
import { PagesComponent } from './Pages/pages.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home', pathMatch:'full'},
  {path:'**',redirectTo:'/Home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
