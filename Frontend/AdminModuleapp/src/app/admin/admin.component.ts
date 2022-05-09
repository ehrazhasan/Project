import { Component, OnInit } from '@angular/core';
import {AdminService} from "../Service/admin.service";
import {Admin} from "../Model/admin.model";
import {HttpErrorResponse} from "@angular/common/http";
import {AdminInstituteUsersService} from "../Service/admin-institute-users.service";
import {AdminNgoUsersService} from "../Service/admin-ngo-users.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  instiSize: number = 0;
  ngoSize: number = 0;

  ngOnInit() {
    this.fetchInstiUsers();
    this.fetchNgoUsers();
  }

  constructor(private seriveInstiUser : AdminInstituteUsersService, private serviceNgoUser : AdminNgoUsersService) {
  }

  fetchInstiUsers() {
    this.seriveInstiUser.fetchUsrs().subscribe(
      response => {
        this.instiSize = response.length;
      },
    (error : HttpErrorResponse) => {
        console.log(error.message);
    }
    );
  }

  fetchNgoUsers() {
    this.serviceNgoUser.fetchUsrs().subscribe(
      response => {
        this.ngoSize = response.length;
      },
      (error : HttpErrorResponse) => {
        console.log(error.message);
       }
    );
  }
}
