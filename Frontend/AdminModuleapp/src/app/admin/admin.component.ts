import { Component, OnInit } from '@angular/core';
import {AdminService} from "../Service/admin.service";
import {Admin} from "../Model/admin.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  users : Admin[] = [];
  constructor(private serviceAdmin : AdminService) { }

  ngOnInit(): void {
    // this.print();
    this.fetchUsers();
  }

  // print() {
  //   console.log('Hello');
  //   console.log(this.users);
  // }

  fetchUsers(){
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
