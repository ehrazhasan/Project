import { Component, OnInit } from '@angular/core';
import {AdminInstituteUsers} from "../Model/admin-institute-users";
import {AdminInstituteUsersService} from "../Service/admin-institute-users.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {User} from "../Model/user";

@Component({
  selector: 'app-admin-institute-users',
  templateUrl: './admin-institute-users.component.html',
  styleUrls: ['./admin-institute-users.component.scss']
})
export class AdminInstituteUsersComponent implements OnInit {

  instiUsers : AdminInstituteUsers[] = [];
  constructor(private serviceInstiUsrs : AdminInstituteUsersService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() : void{
      this.serviceInstiUsrs.fetchUsrs().subscribe(
        response => {
          console.log("ServiceInstiUsers");
          console.log(response);
          this.instiUsers = response;
        },
        (error : HttpErrorResponse) => {

            console.log(error.message);
        }
      );
  }

  instiUser : AdminInstituteUsers = {} as AdminInstituteUsers;
  user : User = {} as User;

  onAddInstiUser(addInstiUser: NgForm) {

      const val1 = addInstiUser.value.password;
      const val2 = addInstiUser.value.cnfpassword;

      if(val1 != val2) confirm("NO");

      this.instiUser.name = addInstiUser.value.name;
      this.instiUser.contact = addInstiUser.value.contact;
      this.instiUser.email = addInstiUser.value.email;
      this.instiUser.address = addInstiUser.value.address;
      this.user.email = addInstiUser.value.email;
      this.user.password = addInstiUser.value.password;
      this.user.role = "Institute";
      this.instiUser.user = this.user;

      this.serviceInstiUsrs.addInstiUser(this.instiUser).subscribe(
        response => {
          console.log(response);
        },
      (error : HttpErrorResponse) => {
          console.log(error.message);
      }
      );
  }
}
