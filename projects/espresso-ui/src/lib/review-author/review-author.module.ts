import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewAuthorComponent } from './review-author.component';



@NgModule({
  declarations: [ReviewAuthorComponent],
  imports: [
      CommonModule
  ],
  exports: [
      ReviewAuthorComponent
  ]
})
export class ReviewAuthorModule { }
