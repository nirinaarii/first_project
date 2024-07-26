import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import {registerLicense} from '@syncfusion/ej2-base';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { provideRouter } from '@angular/router';
import { environment } from '../mon-app/src/environments/environment.prod';
import { error } from 'console';
registerLicense("ORg4AjUWIQA/Gnt2VVhhQ1 Fac11JW3xNYVF2R2FJe1RzdF9DZkwg0X1dQ19hSXtTcEVhWndceXFdQmY=");

if(environment.production){
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err=>console.error(err));
bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch(err =>console.error(err))