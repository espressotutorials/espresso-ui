import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrls: ['./button-favorite.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonFavoriteComponent {

  @Input()
  favorite = false;

  @Output()
  readonly favoriteChange = new EventEmitter<boolean>();

  toggleValueChange() {
    if (this.favorite) {
      this.favoriteChange.emit(false);
    } else {
      this.favoriteChange.emit(true);
    }
  }

}
