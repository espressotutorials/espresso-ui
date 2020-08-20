import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-review-description',
  templateUrl: './review-description.component.html',
  styleUrls: ['./review-description.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ReviewDescriptionComponent {}
