import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrls: ['./button-favorite.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonFavoriteComponent {

  @Input() favorite = false;
  @Input() id: string;
  @Input() title?: string;
  @Input() cover?: string;
  @Input() type?: string;

  @Output()
  readonly favoriteChange = new EventEmitter<any>();

  toggleValueChange() {
    if (this.favorite) {
      this.favoriteChange.emit([false, this.id, this.title, this.cover, this.type]);
      this.favorite = false;
    } else {
      this.favoriteChange.emit([true, this.id, this.title, this.cover, this.type]);
      this.favorite = true;
    }
  }

}
