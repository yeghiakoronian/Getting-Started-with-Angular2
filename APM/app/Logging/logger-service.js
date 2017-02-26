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
require("rxjs/add/operator/map");
var Config = require("./config");
var core_2 = require("angular2-logger/core");
var LoggerService = (function () {
    function LoggerService(logger) {
        this.logger = logger;
        this.log = this.logger;
        // Set the log level using the config value
        switch (Config.data.LogLevel) {
            case "OFF":
                this.log.level = this.logger.Level.OFF;
                break;
            case "ERROR":
                this.log.level = this.logger.Level.ERROR;
                break;
            case "WARN":
                this.log.level = this.logger.Level.WARN;
                break;
            case "INFO":
                this.log.level = this.logger.Level.INFO;
                break;
            case "DEBUG":
                this.log.level = this.logger.Level.DEBUG;
                break;
            default:
                this.log.level = this.logger.Level.LOG;
        }
        console.log("Log level is ", this.log.level);
    }
    return LoggerService;
}());
LoggerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Logger])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger-service.js.map