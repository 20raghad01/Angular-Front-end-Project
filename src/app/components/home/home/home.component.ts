import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { StatusComponent } from "../../user's status/status/status.component";
import { FooterComponent } from "../../footer/footer.component";

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, StatusComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
}
