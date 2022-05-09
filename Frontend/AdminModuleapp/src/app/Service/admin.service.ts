import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Admin} from "../Model/admin.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  // fetchUsers(){
  //   return this.http.get<Admin[]>("http://localhost:8080/InstiUser/get");
  // }

  sendMode(mode: number,id: number ,status: number, ngoId : string){
    if (typeof ngoId !== 'undefined')
      return this.http.put(`http://localhost:8080/api/ngo/updateStatus/${id}/${mode}`, status);
    else
      return this.http.put(`http://localhost:8080/api/institute/updateStatus/${id}/${mode}`, status);
  }
}
