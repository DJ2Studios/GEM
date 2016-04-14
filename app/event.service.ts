import {Injectable} from 'angular2/core';
import {Event} from './event.ts';

@Injectable()
export class EventService {
	
	getEvents() { return Promise.resolve(EVENTS); }

	getEvent(id: number) {
		return Promise.resolve(EVENTS).then(
			events => events.filter(event => event.id === id)[0]
		);
  	}

}

var EVENTS: Event[] = [
	{ 'id': 11, 'title': 'Torchys with friends' },
	{ 'id': 12, 'title': 'EWB General Meeting' },
	{ 'id': 13, 'title': 'Pickup volleyball game' }
];
