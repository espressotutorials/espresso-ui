import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-review-author',
  templateUrl: './review-author.component.html',
  styleUrls: ['./review-author.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReviewAuthorComponent {}
