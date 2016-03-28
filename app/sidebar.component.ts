import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'sidebar',
	templateUrl: ['components/html/sidebar.html'],
	styleUrls: ['components/css/navigation.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class SidebarComponent { 
	show:boolean;
	show = true;
	events = EVENTS;
	toggle() { 
		this.show = !this.show;
		if (!this.show) {
			$("#sidebar-wrapper").css({ "margin-left": "-300px" });
			$("main-page").css({ "width": "calc(100% - 30px)" });
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
			$("#sidebar-icon").css({ "opacity": "0" });
		}
	}
 }

var EVENTS = [
	{ "title": "Torchys" },
	{ "title": "GEM dev Meeting" },
	{ "title": "EWB Plant Lab Official Meeting" }
];