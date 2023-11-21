import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check/check.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    CheckComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CheckComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
