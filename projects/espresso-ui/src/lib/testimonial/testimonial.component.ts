import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.less']
})
export class TestimonialComponent {

  @Input() name: string;
  @Input() text: string;
  @Input() image: string;
  @Input() position: string;

}
