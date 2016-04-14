System.register(['angular2/core', 'angular2/router', './event.service.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, event_service_ts_1;
    var HomePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (event_service_ts_1_1) {
                event_service_ts_1 = event_service_ts_1_1;
            }],
        execute: function() {
            HomePageComponent = (function () {
                function HomePageComponent(_eventService) {
                    this._eventService = _eventService;
                }
                HomePageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._eventService.getEvents()
                        .then(function (events) { return _this.events = events; });
                };
                HomePageComponent.prototype.goBack = function () {
                    console.log(window.history);
                    window.history.back();
                };
                HomePageComponent = __decorate([
                    core_1.Component({
                        selector: 'page-home',
                        template: "\n\t\t<div class=\"flex header-image\"> <span> Welcome, User </span> </div>\n\t\t<div class=\"flex\">\n\t\t\t\t<ul class=\"event-wrapper\">\n\t\t\t\t\t<li *ngFor=\"#event of events\" [routerLink]=\"['Event', {'id': event.id }]\" class=\"event-block\"> {{event.title}} </li>\n\t\t\t\t\t<li class=\"event-block create-event\"> + </li>\n\t\t\t\t</ul>\n\t\t</div>",
                        styleUrls: ['components/css/pages.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [event_service_ts_1.EventService])
                ], HomePageComponent);
                return HomePageComponent;
            }());
            exports_1("HomePageComponent", HomePageComponent);
        }
    }
});
//# sourceMappingURL=homepage.component.js.map