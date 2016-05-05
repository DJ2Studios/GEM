System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var EventService, EVENTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventService = (function () {
                function EventService() {
                }
                EventService.prototype.getEvents = function () { return Promise.resolve(EVENTS); };
                EventService.prototype.getEvent = function (id) {
                    return Promise.resolve(EVENTS).then(function (events) { return events.filter(function (event) { return event.id === id; })[0]; });
                };
                EventService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EventService);
                return EventService;
            }());
            exports_1("EventService", EventService);
            EVENTS = [
                { 'id': 11, 'title': 'Torchys with friends', 'image': 'img/torchys.jpg' },
                { 'id': 12, 'title': 'EWB General Meeting', 'image': 'img/ewb.png' },
                { 'id': 13, 'title': 'Pickup volleyball game', 'image': 'img/sand-volleyball.jpg' }
            ];
        }
    }
});
//# sourceMappingURL=event.service.js.map