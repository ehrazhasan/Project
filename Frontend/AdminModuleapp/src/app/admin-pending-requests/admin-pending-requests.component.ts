import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Admin} from "../Model/admin.model";
import {AdminService} from "../Service/admin.service";

@Component({
  selector: 'app-admin-pending-requests',
  templateUrl: './admin-pending-requests.component.html',
  styleUrls: ['./admin-pending-requests.component.scss']
})
export class AdminPendingRequestsComponent implements OnInit {

  users : Admin[] = [];
  constructor(private serviceAdmin : AdminService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() : void{
    this.serviceAdmin.fetchUsers().subscribe(
      response => {

        console.log(response);

        this.users = response
      }
    );
  }

  onClick(mode:number, id : number) {

    this.serviceAdmin.sendMode(mode,id,0).subscribe(
      response => {
        if(response == 1){
          alert("Approved!");
        }

        if(response == 0){
          alert("Rejected!");
        }
        window.location.reload();
      },
      (error : HttpErrorResponse) => {
        alert(error.message);
      }
    )

  }
}
