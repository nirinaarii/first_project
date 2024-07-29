import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { HammerModule } from '@angular/platform-browser';
import { IgxCalendarModule, IViewChangeEventArgs } from 'igniteui-angular';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
import { CalendarView } from 'angular-calendar';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-header',
  template :'<igx-calendar [value]="selectedDate"(onDateSelected)="highlight($event)"></igx-calendar>',
  
  standalone: true,
  imports: [RouterLink,RouterOutlet,HammerModule,
    IgxCalendarModule,IGX_CALENDAR_DIRECTIVES],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   
 public onSelection(dates: Date[]){
   if(dates.length > 5){
    // this.calendar.selectedDate = [];
 }
}
  
 public viewDateChanged(event:IViewChangeEventArgs){
      
 }
  

 public activeViewChanged(event:CalendarView){

 }

 techniciansAvailable = 3;

getSpecialDates(): Date[]{
      const today = new Date();

      return [today];
 }

getSpecialDateStyle(date: Date): string{
  if(date.getDate() === new Date().getDate()){
    if(this.techniciansAvailable >= 3){
      return 'background-color:green';
    }else if(this.techniciansAvailable === 2){
      return 'background-color:blue';
    }
     return 'background-color : red';
  }
  return '';
 }

}
