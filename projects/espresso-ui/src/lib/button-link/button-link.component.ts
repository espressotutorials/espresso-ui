import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonLinkComponent {

  @Input() url: string;
  @Input() label: string;
  @Input() title: string;
  @Input() rel?: string;
  @Input() target?: string;

  @Input() secondary?: boolean;

}
