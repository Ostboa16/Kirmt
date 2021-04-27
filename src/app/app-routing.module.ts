import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IncidentComponent } from './incident/incident.component';
import { KirmtComponent } from './kirmt/kirmt.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: "", redirectTo:"login", pathMatch:"full" },
  { path: "login", component: LoginComponent },
  { path: "admin/incident", component: IncidentComponent },
  { path: "kirmt", component: KirmtComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
