import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from './testimonial.component';



@NgModule({
  declarations: [TestimonialComponent],
  imports: [
      CommonModule
  ],
  exports: [
      TestimonialComponent
  ]
})
export class TestimonialModule { }
