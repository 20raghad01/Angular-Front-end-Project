import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { StatusComponent } from "../../user's status/status/status.component";
import { FooterComponent } from "../../footer/footer.component";
import { ActivatedRoute } from '@angular/router';

interface City {
  name: string;
  imports: [NavbarComponent, StatusComponent, FooterComponent]
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, StatusComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private routerActive:ActivatedRoute){}
  Userid!:any;
  ngOnInit() {
    this.Userid=this.routerActive.snapshot.params['id']
  }
}
