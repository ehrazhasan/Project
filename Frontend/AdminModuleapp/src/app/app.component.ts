import { Component } from '@angular/core';
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdminModuleapp';
  constructor(private router:Router) {}

  goToRequests = () => {
    this.router.navigateByUrl('admin-pending-requests/admin-pending-requests.component.html');
  }


  openNav() {
    document.getElementById("sidebar")!.style.width = "16.66666667%";
    document.getElementById("mySidebar")!.style.width = "120px";
  }
  closeNav() {
    document.getElementById("sidebar")!.style.width = "0";
    document.getElementById("mySidebar")!.style.width= "0";
  }

}
