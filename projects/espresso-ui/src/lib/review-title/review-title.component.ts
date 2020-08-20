import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-review-title',
  templateUrl: './review-title.component.html',
  styleUrls: ['./review-title.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReviewTitleComponent {}
