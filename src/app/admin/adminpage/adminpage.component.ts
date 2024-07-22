import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminpage',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminpageComponent {

}
