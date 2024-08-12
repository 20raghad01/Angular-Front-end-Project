import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { StatusComponent } from "../../user's status/status/status.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, StatusComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
