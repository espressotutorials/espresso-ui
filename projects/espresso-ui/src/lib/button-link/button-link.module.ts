import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLinkComponent } from './button-link.component';



@NgModule({
  declarations: [ButtonLinkComponent],
  imports: [
      CommonModule
  ],
  exports: [
      ButtonLinkComponent
  ]
})
export class ButtonLinkModule { }
