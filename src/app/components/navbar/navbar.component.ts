import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  @Input()
  ID!:any;
  UserDetails!:any;
  decodedinfo!:any;
  constructor(private out:UserServiceService,private serv:UserServiceService){}
  ngOnInit() {
    this.decodedinfo=jwtDecode(this.ID);
    console.log(this.decodedinfo);
    this.getuser();
    
  }
  getuser(){
    this.serv.getOneUser(this.decodedinfo.id).subscribe((response:any)=>{
      this.UserDetails=response;
      console.log("user details",this.UserDetails)
      
    })

  }
  logout(){
    this.out.logout();
  }
  logged:boolean=this.out.isLoggedIn();
}
