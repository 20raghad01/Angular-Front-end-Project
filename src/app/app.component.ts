import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminHeaderComponent,AdminPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project3';
}
