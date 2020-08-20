import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AuthorComponent {

  @Input() name: string;
  @Input() text: string;
  @Input() image?: string;
  @Input() position?: string;

}
