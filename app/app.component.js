System.register(['angular2/core', 'angular2/router', './navbar.component.ts', './sidebar.component.ts', './homepage.component.ts', './eventpage.component.ts', './calendarpage.component.ts'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_ts_1, sidebar_component_ts_1, homepage_component_ts_1, eventpage_component_ts_1, calendarpage_component_ts_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_ts_1_1) {
                navbar_component_ts_1 = navbar_component_ts_1_1;
            },
            function (sidebar_component_ts_1_1) {
                sidebar_component_ts_1 = sidebar_component_ts_1_1;
            },
            function (homepage_component_ts_1_1) {
                homepage_component_ts_1 = homepage_component_ts_1_1;
            },
            function (eventpage_component_ts_1_1) {
                eventpage_component_ts_1 = eventpage_component_ts_1_1;
            },
            function (calendarpage_component_ts_1_1) {
                calendarpage_component_ts_1 = calendarpage_component_ts_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.goBack = function () {
                    window.history.back();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'application',
                        template: "\n\t\t<navbar></navbar>\n\t\t<sidebar id=\"sidebar-wrapper\"></sidebar>\n\t\t<button (click)=\"goBack()\">Back</button>\n\t\t<router-outlet></router-outlet>\n\t",
                        styleUrls: ['components/css/navigation.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_ts_1.NavbarComponent, sidebar_component_ts_1.SidebarComponent, homepage_component_ts_1.HomePageComponent, eventpage_component_ts_1.EventPageComponent, calendarpage_component_ts_1.CalendarPageComponent]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/home',
                            name: 'Home',
                            component: homepage_component_ts_1.HomePageComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/event',
                            name: 'Event',
                            component: eventpage_component_ts_1.EventPageComponent
                        },
                        {
                            path: '/calendar',
                            name: 'Calendar',
                            component: calendarpage_component_ts_1.CalendarPageComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map