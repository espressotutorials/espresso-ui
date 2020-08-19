import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOverlayComponent } from './card-overlay.component';



@NgModule({
  declarations: [CardOverlayComponent],
  imports: [
      CommonModule
  ],
  exports: [
      CardOverlayComponent
  ]
})
export class CardOverlayModule { }
