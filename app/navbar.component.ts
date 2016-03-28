import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'navbar',
	templateUrl: ['components/views/navbar.html'],
	styleUrls: ['components/css/navigation.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent { }