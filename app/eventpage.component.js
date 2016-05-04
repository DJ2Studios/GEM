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
    var EventPageComponent;
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
            EventPageComponent = (function () {
                function EventPageComponent(_eventService, _routeParams) {
                    this._eventService = _eventService;
                    this._routeParams = _routeParams;
                }
                EventPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._eventService.getEvent(id)
                        .then(function (event) { return _this.event = event; });
                };
                EventPageComponent.prototype.goBack = function () {
                    window.history.back();
                };
                EventPageComponent = __decorate([
                    core_1.Component({
                        selector: 'page-event',
                        template: "\n\t\t<button (click)=\"goBack()\">Back</button>\n\t \t<div *ngIf=\"event\"> Welcome to your {{event.title}} event page! </div>\n\t\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [event_service_ts_1.EventService, router_1.RouteParams])
                ], EventPageComponent);
                return EventPageComponent;
            }());
            exports_1("EventPageComponent", EventPageComponent);
        }
    }
});
//# sourceMappingURL=eventpage.component.js.map