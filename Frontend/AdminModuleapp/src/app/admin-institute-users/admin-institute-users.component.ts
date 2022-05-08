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

      if(val1 != val2) {
        alert("The password does not match!");
      }
      else {
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
            addInstiUser.reset();
          },
          (error: HttpErrorResponse) => {
            console.log(error.message);
            addInstiUser.reset();
          }
        );

        window.location.reload();
      }
  }

  onUpdateInstiUser(updateInstiUser: NgForm) {

    const val1 = updateInstiUser.value.password;
    const val2 = updateInstiUser.value.cnfpassword;

    if(val1 != val2) {
      alert("The password does not match!");
    }
    else{
      console.log(updateInstiUser);
      this.instiUser.id = updateInstiUser.value.id;
      this.instiUser.name = updateInstiUser.value.name;
      this.instiUser.email = updateInstiUser.value.email;
      this.instiUser.address = updateInstiUser.value.address;
      this.instiUser.contact = updateInstiUser.value.contact;
      this.user.email = updateInstiUser.value.email;
      this.user.id = updateInstiUser.value.userId;
      this.user.password = updateInstiUser.value.password;
      this.user.role = "Institute";
      this.instiUser.user = this.user;

      this.serviceInstiUsrs.updateInstiUser(this.instiUser).subscribe(
        response => {
          console.log(response);
          updateInstiUser.reset();
        },
        (error: HttpErrorResponse) => {
          console.log(error.message);
         updateInstiUser.reset();
        }
      );
      // window.location.reload();
    }
  }
}
