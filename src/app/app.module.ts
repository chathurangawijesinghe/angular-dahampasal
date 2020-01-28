import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SettingComponent } from './setting/setting.component';
import { StudentDashboardComponent } from './sidebar/dashboards/student-dashboard/student-dashboard.component';
import { AdministratorDashboardComponent } from './sidebar/dashboards/administrator-dashboard/administrator-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultDashboardComponent } from './sidebar/dashboards/default-dashboard/default-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './header/home/home.component';
import { ContactComponent } from './header/contact/contact.component';
import { ProvincesComponent } from './sidebar/provinces/provinces.component';
import { ProvinceComponent } from './sidebar/provinces/province/province.component';
import { DistrictsComponent } from './sidebar/provinces/province/districts/districts.component';
import { DistrictComponent } from './sidebar/provinces/province/districts/district/district.component';
import { DashboardsComponent } from './sidebar/dashboards/dashboards.component';
import { DahampasalaComponent } from './sidebar/provinces/province/districts/district/dahampasal/dahampasala/dahampasala.component';
import { DahampasalComponent } from './sidebar/provinces/province/districts/district/dahampasal/dahampasal.component';
import { DahampasalaPageComponent } from './pages/dahampasala-page/dahampasala-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingComponent,
    StudentDashboardComponent,
    AdministratorDashboardComponent,
    DefaultDashboardComponent,
    SidebarComponent,
    HomeComponent,
    ContactComponent,
    ProvincesComponent,
    ProvinceComponent,
    DistrictsComponent,
    DistrictComponent,
    DashboardsComponent,
    DahampasalaComponent,
    DahampasalComponent,
    DahampasalaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
