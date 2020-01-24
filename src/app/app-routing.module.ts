import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministratorDashboardComponent } from './sidebar/dashboards/administrator-dashboard/administrator-dashboard.component';
import { StudentDashboardComponent } from './sidebar/dashboards/student-dashboard/student-dashboard.component';
import { DefaultDashboardComponent } from './sidebar/dashboards/default-dashboard/default-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/default-dashboard', pathMatch: 'full' },
  { path: 'administrator-dashboard', component: AdministratorDashboardComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'default-dashboard', component: DefaultDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
