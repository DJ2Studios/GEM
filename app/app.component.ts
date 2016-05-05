import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';

import {NavbarComponent} from './navbar.component.ts';
import {SidebarComponent} from './sidebar.component.ts';
import {HomePageComponent} from './homepage.component.ts';
import {EventPageComponent} from './eventpage.component.ts';
import {CalendarPageComponent} from './calendarpage.component.ts';
import {CreateEventPageComponent} from './createeventpage.component.ts';
import {UserPageComponent} from './userpage.component.ts';
import {EventService} from './event.service.ts';

@Component({
	selector: 'application',
	template: `
		<navbar></navbar>
		<sidebar id="sidebar-container"></sidebar>
		<div class="page">
			<router-outlet></router-outlet>
		</div>
	`,
	styleUrls: ['views/css/navigation.css'],
	providers: [EventService],
	directives: [ROUTER_DIRECTIVES, NavbarComponent, SidebarComponent, HomePageComponent, CreateEventPageComponent, EventPageComponent, CalendarPageComponent, UserPageComponent]
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
		path: '/createevent',
		name: 'CreateEvent',
		component: CreateEventPageComponent
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: CalendarPageComponent
	},
	{
		path: '/user',
		name: 'User',
		component: UserPageComponent
	}
])

export class AppComponent { 
}