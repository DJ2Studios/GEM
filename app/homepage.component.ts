import {Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
	selector: 'page-home',
	template: `Welcome to your Home Page`
})


export class HomePageComponent {
	constructor(
		private _router: Router){
	}
}
