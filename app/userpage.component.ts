import {Component} from 'angular2/core';

@Component({
	selector: 'page-user',
	template: `
		<button (click)="goBack()">Back</button>
		here's your user information
	`
})

export class UserPageComponent {
	goBack() {
		console.log(window.history);
		window.history.back();
	}
}
