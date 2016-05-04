import {Component} from 'angular2/core';

@Component({
	selector: 'page-calendar',
	templateUrl: ['views/html/calendar.html']
})


export class CalendarPageComponent {
	goBack() {
		console.log(window.history);
		window.history.back();
	}
	ngOnInit() {
		console.log("Loading calendar");
		scheduler.config.xml_date = "%Y-%m-%d %H:%i";
		scheduler.init('scheduler_here', new Date(2015, 0, 10), "week");
	}
	resize() {
		scheduler.setLightboxSize();
	}
}
