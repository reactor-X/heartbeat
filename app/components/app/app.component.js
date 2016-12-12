"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var dashboard_service_1 = require("../../service/dashboard.service");
var HostInfoComponent = (function () {
    function HostInfoComponent(DashboardData) {
        this.DashboardData = DashboardData;
    }
    HostInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.DashboardData.getHostInfo().then(function (HostInfoData) { return _this.HostInfo = HostInfoData[0]; });
    };
    return HostInfoComponent;
}());
HostInfoComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<h1 *ngIf="HostInfo">My first {{HostInfo}} app is up and running</h1>',
        providers: [dashboard_service_1.DashboardService]
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], HostInfoComponent);
exports.HostInfoComponent = HostInfoComponent;
//# sourceMappingURL=app.component.js.map