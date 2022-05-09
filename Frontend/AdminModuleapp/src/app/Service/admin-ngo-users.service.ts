import { Injectable } from '@angular/core';
import {AdminInstituteUsers} from "../Model/admin-institute-users";
import {HttpClient} from "@angular/common/http";
import {AdminNgoUsers} from "../Model/admin-ngo-users";

@Injectable({
  providedIn: 'root'
})
export class AdminNgoUsersService {

  constructor(private http : HttpClient) { }

  fetchUsrs() {
    return this.http.get<AdminNgoUsers[]>("http://localhost:8080/api/ngo/get");
  }

  addNgoUser(ngoUser: AdminNgoUsers) {
    return this.http.post("http://localhost:8080/api/ngo/add",ngoUser);
  }

  updateNgoUser(ngoUser: AdminNgoUsers) {
    return this.http.put("http://localhost:8080/api/ngo/update", ngoUser);
  }

  deleteNgoUser(id : number) {
    return this.http.delete(`http://localhost:8080/api/ngo/delete/${id}`);
  }
}
