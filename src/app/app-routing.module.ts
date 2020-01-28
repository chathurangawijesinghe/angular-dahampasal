import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministratorDashboardComponent } from './sidebar/dashboards/administrator-dashboard/administrator-dashboard.component';
import { StudentDashboardComponent } from './sidebar/dashboards/student-dashboard/student-dashboard.component';
import { DefaultDashboardComponent } from './sidebar/dashboards/default-dashboard/default-dashboard.component';
import { DahampasalaComponent } from './sidebar/provinces/province/districts/district/dahampasal/dahampasala/dahampasala.component';
import { DahampasalaPageComponent } from './pages/dahampasala-page/dahampasala-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'dashboard/administrator-dashboard', component: AdministratorDashboardComponent },
  { path: 'dashboard/student-dashboard', component: StudentDashboardComponent },
  { path: 'dashboard/default-dashboard', component: DefaultDashboardComponent },
  { path: 'dahampasala/:id', component: DahampasalaPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
