import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AdminInstituteUsers} from "../Model/admin-institute-users";

@Injectable({
  providedIn: 'root'
})
export class AdminInstituteUsersService {

  constructor(private http : HttpClient) { }

  fetchUsrs() {
    return this.http.get<AdminInstituteUsers[]>("http://localhost:8080/api/institute/get");
  }

  addInstiUser(instiUser: AdminInstituteUsers) {

      return this.http.post("http://localhost:8080/api/institute/addInstiUserByAdmin",instiUser);
  }
}
