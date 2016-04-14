import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'navbar',
	templateUrl: ['views/html/navbar.html'],
	styleUrls: ['views/css/navigation.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent { }