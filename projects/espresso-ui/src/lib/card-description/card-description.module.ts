import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDescriptionComponent } from './card-description.component';



@NgModule({
  declarations: [CardDescriptionComponent],
  imports: [
      CommonModule
  ],
  exports: [
      CardDescriptionComponent
  ]
})
export class CardDescriptionModule { }
