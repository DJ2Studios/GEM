import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {NavbarComponent} from './navbar.component.ts';
import {SidebarComponent} from './sidebar.component.ts';
import {MainPageComponent} from './mainpage.component.ts';
import {EventPageComponent} from './eventpage.component.ts';

@Component({
	selector: 'application',
	template: `
		<navbar></navbar>
		<sidebar id="sidebar-wrapper"></sidebar>
		<a [routerLink]="['Event']">Events</a>
		<button (click)="goBack()">Back</button>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['components/css/navigation.css'],
	directives: [ROUTER_DIRECTIVES, NavbarComponent, SidebarComponent, MainPageComponent, EventPageComponent]
})

@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: MainPageComponent
	},
	{ 	
		path: '/event',
		name: 'Event',
		component: EventPageComponent
	}
])

export class AppComponent { 
	goBack() {
		window.history.back();
	}
}