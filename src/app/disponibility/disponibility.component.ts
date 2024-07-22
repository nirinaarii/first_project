import { Component } from '@angular/core';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
import { IgxCalendarModule } from 'igniteui-angular';

@Component({
  selector: 'app-disponibility',
  template: '<igx-calendar></igx-calendar>',
  standalone: true,
  imports: [IgxCalendarModule,IGX_CALENDAR_DIRECTIVES,],
  templateUrl: './disponibility.component.html',
  styleUrl: './disponibility.component.css'
})
export class DisponibilityComponent {

}
