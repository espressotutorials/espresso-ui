import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAuthorComponent } from './card-author.component';



@NgModule({
  declarations: [CardAuthorComponent],
  imports: [
      CommonModule
  ],
  exports: [
      CardAuthorComponent
  ]
})
export class CardAuthorModule { }
