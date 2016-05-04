import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {EventService} from './event.service.ts';
import {Event} from './event.ts';

@Component({
	selector: 'sidebar',
	templateUrl: ['views/html/sidebar.html'],
	styleUrls: ['views/css/navigation.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [EventService]
})

export class SidebarComponent { 
	show:boolean;
	show = true;
	events: Event[];

	constructor(private _eventService: EventService) {
	}

	ngOnInit() {
		this._eventService.getEvents()
			.then(events => this.events = events);
	}
	
	toggle() { 
		this.show = !this.show;
		if (!this.show) {
			$("#sidebar-wrapper").css({ "margin-left": "-300px" });
			$("#sidebar-container").css({ "width": "30px" });
			$("main-page").css({ "width": "calc(100% - 30px)" });
			scheduler.setLightboxSize();
			$("#sidebar-wrapper").one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
				function() {
					$(".expand").css({ "width": "30px" });
					$("#sidebar-icon").css({ "opacity": "1" });
				});
		}
		else {
			$("#sidebar-wrapper").css({ "margin-left": "0" });
			$("main-page").css({ "width": "calc(100% - 315px)" });
			$(".expand").css({ "width": "15px" });
			$("#sidebar-container").css({ "width": "315px" });
			$("#sidebar-icon").css({ "opacity": "0" });
		}
	}
 }