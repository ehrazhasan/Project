import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {AdminPendingRequestsComponent} from "./admin-pending-requests/admin-pending-requests.component";

const routes: Routes = [
  {
    path:'admin', component:AdminComponent
  },
  {
    path:'admin-pending-requests', component:AdminPendingRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
