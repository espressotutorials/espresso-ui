import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFavoriteComponent } from './button-favorite.component';



@NgModule({
  declarations: [ButtonFavoriteComponent],
  imports: [
      CommonModule
  ],
  exports: [
      ButtonFavoriteComponent
  ]
})
export class ButtonFavoriteModule { }
