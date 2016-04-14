import {Component} from 'angular2/core';

@Component({
	selector: 'page-calendar',
	template: `<button (click)="goBack()">Back</button>
	Here you can view and (maybe update it if we want to do this feature?) your calendar`
})


export class CalendarPageComponent {
	goBack() {
		console.log(window.history);
		window.history.back();
	}
}
