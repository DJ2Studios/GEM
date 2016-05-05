import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Event} from './event.ts';
import {EventService} from './event.service.ts';

@Component({
	selector: 'page-event',
	styleUrls: ['views/css/pages.css'],
	templateUrl: ['views/html/eventpage.html']
})

export class EventPageComponent {
	event: Event;
	
	constructor(private _eventService: EventService, private _routeParams: RouteParams) {
	}
	
	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._eventService.getEvent(id)
			.then(event => this.event = event);
	}
	goBack() {
		window.history.back();
	}
}

