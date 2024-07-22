import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { HammerModule } from '@angular/platform-browser';
import { IgxCalendarModule } from 'igniteui-angular';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
@Component({
  selector: 'app-header',
  template :'<igx-calendar></igx-calendar>',
  standalone: true,
  imports: [ RouterLink,RouterOutlet,HammerModule,
    IgxCalendarModule,IGX_CALENDAR_DIRECTIVES],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
