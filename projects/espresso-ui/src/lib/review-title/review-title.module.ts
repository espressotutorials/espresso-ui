import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewTitleComponent } from './review-title.component';



@NgModule({
  declarations: [ReviewTitleComponent],
  imports: [
      CommonModule
  ],
  exports: [
      ReviewTitleComponent
  ]
})
export class ReviewTitleModule { }
