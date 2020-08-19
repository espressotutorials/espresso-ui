import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent {

    @Input() value?: string;
    @Input() secondary?: boolean;

    @Output()
    readonly clickEvent = new EventEmitter<any>();

    onClick(value?: any) {
        this.clickEvent.emit(value);
    }

}
