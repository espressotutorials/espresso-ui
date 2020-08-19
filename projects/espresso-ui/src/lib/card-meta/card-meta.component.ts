import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-card-meta',
  templateUrl: './card-meta.component.html',
  styleUrls: ['./card-meta.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardMetaComponent {

  @Input() type: string;
  @Input() typeTitle: string;
  @Input() duration: string;
  @Input() level: string;

}
