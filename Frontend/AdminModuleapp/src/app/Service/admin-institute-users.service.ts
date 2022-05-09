import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AdminInstituteUsers} from "../Model/admin-institute-users";
import {AdminNgoUsers} from "../Model/admin-ngo-users";

@Injectable({
  providedIn: 'root'
})
export class AdminInstituteUsersService {

  constructor(private http : HttpClient) { }

  fetchUsrs() {
    return this.http.get<AdminInstituteUsers[]>("http://localhost:8080/api/institute/get");
  }

  fetchUsersByStatus() {
    return this.http.get<AdminInstituteUsers[]>("http://localhost:8080/api/institute/getByStatus");
  }

  addInstiUser(instiUser: AdminInstituteUsers) {

      return this.http.post("http://localhost:8080/api/institute/add",instiUser);
  }

  updateInstiUser(instiUser: AdminInstituteUsers) {
    console.log("Service");
    console.log(instiUser);
    return this.http.put("http://localhost:8080/api/institute/update", instiUser);
  }

  deleteInstiUser(id : number) {
    console.log(id);
    return this.http.delete(`http://localhost:8080/api/institute/delete/${id}`);
  }
}
