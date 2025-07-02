import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {sharedUtils} from '@org/shared-utils';

console.log("sharedUtils", sharedUtils());

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
