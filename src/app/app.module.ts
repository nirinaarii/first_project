import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HammerModule } from '@angular/platform-browser';

import { IgxCalendarModule,IgxDialogModule,IgxCardModule } from 'igniteui-angular';

/*
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';*/
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ProgrammComponent } from './programm/programm.component';
/*import {IonicModule } from '@ionic/angular';*/
/*import { CommonModule } from '@angular/common';*/
/*import { NgCalendarModule  } from 'ionic2-calendar';*/
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
/*import { CalendarModule } from '@syncfusion/ej2-angular-calendars';*/
/*import { CalendarModule } from 'ionic2-calendar';*/

import { CommonModule } from '@angular/common';

import { CalendarModule } from 'angular-calendar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';
import { ServeurComponent } from './serveur/serveur.component';
// import { AdministrationComponent } from './administration/administration.component';

/*const Content = import(/* @vite-ignore */
/*function importModule(path) {
    
    return import(path);
  }
});*/
@NgModule({

  declarations: [
    AppComponent ,
    //  HomeComponent,
    ProgrammComponent,
    HeaderComponent,
    DisponibilityComponent,ServeurComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,HammerModule, IgxCalendarModule,
    IgxDialogModule,IgxCardModule,RouterModule,AppComponent,    /* MatInputModule,
     MatFormFieldModule,
     
     MatButtonModule,FormsModule,
     IonicModule,
     CommonModule,NgCalendarModule,*/
    /* CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),*/
    CalendarModule
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent,
    Component,
    /* HomeComponent*/
  ],

})
export class AppModule {
}
