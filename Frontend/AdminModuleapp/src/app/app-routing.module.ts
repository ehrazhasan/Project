import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {AdminPendingRequestsComponent} from "./admin-pending-requests/admin-pending-requests.component";
import {AdminInstituteUsersComponent} from "./admin-institute-users/admin-institute-users.component";

const routes: Routes = [
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'admin-pending-requests', component:AdminPendingRequestsComponent
  },
  {
    path:'admin-institute-users', component:AdminInstituteUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
