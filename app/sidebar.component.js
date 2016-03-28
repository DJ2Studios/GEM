System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var SidebarComponent, EVENTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent() {
                    this.show = true;
                    this.events = EVENTS;
                }
                SidebarComponent.prototype.toggle = function () {
                    this.show = !this.show;
                    if (!this.show) {
                        $("#sidebar-wrapper").css({ "margin-left": "-300px" });
                        $("main-page").css({ "width": "calc(100% - 30px)" });
                        $("#sidebar-wrapper").one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function () {
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
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'sidebar',
                        templateUrl: ['components/html/sidebar.html'],
                        styleUrls: ['components/css/navigation.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
            EVENTS = [
                { "title": "Torchys" },
                { "title": "GEM dev Meeting" },
                { "title": "EWB Plant Lab Official Meeting" }
            ];
        }
    }
});
//# sourceMappingURL=sidebar.component.js.map