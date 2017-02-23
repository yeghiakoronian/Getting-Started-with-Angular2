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
var core_2 = require("angular2-logger/core");
var LoggerAppComponent = (function () {
    function LoggerAppComponent(logger) {
        this.logger = logger;
        this.Level = core_2.Level;
    }
    LoggerAppComponent.prototype.logMsgs = function () {
        this.logger.error('This is a priority level 1 error message...');
        this.logger.warn('This is a priority level 2 warning message...');
        this.logger.info('This is a priority level 3 info message...');
        this.logger.debug('This is a priority level 4 debug message...');
        this.logger.log('This is a priority level 5 log message...');
    };
    LoggerAppComponent.prototype.setLevel = function (level) {
        this.logger.level = level;
    };
    LoggerAppComponent.prototype.clear = function () {
        console.clear();
    };
    LoggerAppComponent.prototype.store = function () {
        this.logger.store();
    };
    LoggerAppComponent.prototype.unstore = function () {
        this.logger.unstore();
    };
    return LoggerAppComponent;
}());
LoggerAppComponent = __decorate([
    core_1.Component({
        selector: "logger-app",
        template: "\n\n        <h1>Logger's current priority level: {{logger.level}} </h1> \n\n        <h3>Change the Logger's priority level</h3>\n        \n        <button (click)=\"setLevel( Level.OFF )\"> Off </button>\n        <button (click)=\"setLevel( Level.ERROR )\"> Error </button>\n        <button (click)=\"setLevel( Level.WARN )\"> Warning </button>\n        <button (click)=\"setLevel( Level.INFO )\"> Info </button>\n        <button (click)=\"setLevel( Level.DEBUG )\"> Debug </button>\n        <button (click)=\"setLevel( Level.LOG )\"> Log </button>\n        \n        <h3>Watch their effects in the console</h3>\n\n        <button (click)=\"logMsgs()\">Log Messages</button>\n        <button (click)=\"clear()\"> Clear console </button>\n              \n        <h3>Store the logger's current level in the browser's local storage so it doesn't get reset after refreshing the page. </h3>\n        <button (click)=\"store()\"> store </button>\n        <button (click)=\"unstore()\"> unstore </button>\n        \n    "
    }),
    __metadata("design:paramtypes", [core_2.Logger])
], LoggerAppComponent);
exports.LoggerAppComponent = LoggerAppComponent;
//# sourceMappingURL=logger-app.component.js.map