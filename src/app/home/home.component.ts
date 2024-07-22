import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

/*import { CalendarModule, DateAdapter } from 'angular-calendar';*/
// import { CalendarModule } from "@syncfusion/ej2-angular-calendars";
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
import { IgxCalendarModule } from 'igniteui-angular';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  template: '<igx-calendar></igx-calendar>',
  standalone: true,
  imports: [FontAwesomeModule,//CalendarModule,
    HammerModule, IgxCalendarModule,IGX_CALENDAR_DIRECTIVES,
     RouterLink,RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
  viewDate: Date = new Date();

  constructor(private router:Router){}

  redirectToLogin(){
    this.router.navigate(['/login']);
  }

  onNavigate() {
    const externalUrl = 'https://example.com';
    window.open(externalUrl, '_blank'); // Ouvre dans un nouvel onglet
  }
}
