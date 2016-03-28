import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {NavbarComponent} from './navbar.component.ts';
import {SidebarComponent} from './sidebar.component.ts';
import {HomePageComponent} from './homepage.component.ts';
import {EventPageComponent} from './eventpage.component.ts';
import {CalendarPageComponent} from './calendarpage.component.ts';

@Component({
	selector: 'application',
	template: `
		<navbar></navbar>
		<sidebar id="sidebar-wrapper"></sidebar>
		<button (click)="goBack()">Back</button>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['components/css/navigation.css'],
	directives: [ROUTER_DIRECTIVES, NavbarComponent, SidebarComponent, HomePageComponent, EventPageComponent, CalendarPageComponent]
})

@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: HomePageComponent,
		useAsDefault: true
	},
	{ 	
		path: '/event',
		name: 'Event',
		component: EventPageComponent
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: CalendarPageComponent
	}
])

export class AppComponent { 
	goBack() {
		window.history.back();
	}
}