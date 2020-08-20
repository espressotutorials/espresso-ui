import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewDescriptionComponent } from './review-description.component';



@NgModule({
  declarations: [ReviewDescriptionComponent],
  imports: [
      CommonModule
  ],
  exports: [
      ReviewDescriptionComponent
  ]
})
export class ReviewDescriptionModule { }
