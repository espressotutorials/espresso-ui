import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-card-top-button',
  templateUrl: './card-top-button.component.html',
  styleUrls: ['./card-top-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardTopButtonComponent {

  @Input() id: any;
  @Output() cardTopBtnEvent = new EventEmitter();

  clickHandler() {
    this.cardTopBtnEvent.emit(this.id);
  }

}
