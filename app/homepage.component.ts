import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {EventService} from './event.service.ts';
import {Event} from './event.ts'

@Component({
	selector: 'page-home',
	template: `
		<div class="flex header-image"> <span> Welcome, User </span> </div>
		<div class="flex">
				<ul class="event-wrapper">
					<li *ngFor="#event of events" [routerLink]="['Event', {'id': event.id }]" class="event-block"> {{event.title}} </li>
					<li class="event-block create-event"> + </li>
				</ul>
		</div>`,
	styleUrls: ['views/css/pages.css'],
	directives: [ROUTER_DIRECTIVES]
})


export class HomePageComponent {
	events: Event[];

	constructor(private _eventService: EventService) {	
	}
	
	ngOnInit() {
		this._eventService.getEvents()
			.then(events => this.events = events);
	}
	goBack() {
		console.log(window.history);
		window.history.back();
	}
}