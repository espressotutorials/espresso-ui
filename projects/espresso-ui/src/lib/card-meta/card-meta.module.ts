import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMetaComponent } from './card-meta.component';



@NgModule({
  declarations: [CardMetaComponent],
  imports: [
      CommonModule
  ],
  exports: [
      CardMetaComponent
  ]
})
export class CardMetaModule { }
