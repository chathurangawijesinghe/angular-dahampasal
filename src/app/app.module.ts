import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SettingComponent } from './setting/setting.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { AdministratorDashboardComponent } from './pages/administrator-dashboard/administrator-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultDashboardComponent } from './pages/default-dashboard/default-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DahampasalaPageComponent } from './pages/dahampasala-page/dahampasala-page.component';
import { HeaderRoutingModule } from './header/header-routing.module';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { DashboardsComponent } from './sidebar/dashboards/dashboards.component';

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
    DahampasalaPageComponent,
    SidebarItemComponent,
    DashboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
