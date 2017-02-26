import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import *  as Config from './config';
import {Logger, Level} from "angular2-logger/core";

@Injectable()
export class LoggerService {

  public log: Logger;

  constructor(public logger: Logger) {
    this.log = this.logger;
    // Set the log level using the config value
    if(Number(localStorage.getItem("angular2.logger.level"))){
      this.logger.level = Number(localStorage.getItem("angular2.logger.level"));      
    }   
    else{
      switch(Config.data.LogLevel){
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
    }
      console.log("Log level is ", this.log.level);
      console.log(Number(localStorage.getItem("angular2.logger.level")));
  }

}