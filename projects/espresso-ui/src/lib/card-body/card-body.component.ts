import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardBodyComponent {

  @Input() overlay = false;

}
