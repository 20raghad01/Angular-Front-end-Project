import { Component } from '@angular/core';
import { StatusComponent } from "../../user's status/status/status.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [StatusComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
