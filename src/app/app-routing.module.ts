import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministratorDashboardComponent } from './pages/administrator-dashboard/administrator-dashboard.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { DefaultDashboardComponent } from './pages/default-dashboard/default-dashboard.component';
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
