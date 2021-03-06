"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Yeghia Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        template: "\n       <div class= 'panel panel-primary'>\n    <div class = 'panel-heading'>\n        {{pageTitle}}\n    </div>\n</div>\n<div class = 'panel-body'>\n    Error 404 Page not Found\n</div>\n<div class ='panel-footer'>\n    <a class='btn btn-default' (click)='onBack()' style='width:80px'>\n        <i class='glyphicon glyphicon-chevron-left'></i> Back\n    </a>\n</div>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=pagenotfound.component.js.map