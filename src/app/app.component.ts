import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {

    message: string | null = null;

    onButtonClick() {
        console.log('click');
    }

    onFavoriteChange(event: any) {
        console.log(event);
    }
}
