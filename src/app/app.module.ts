import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SettingComponent } from './setting/setting.component';
import { StudentDashboardComponent } from './dashboards/student-dashboard/student-dashboard.component';
import { AdministratorDashboardComponent } from './dashboards/administrator-dashboard/administrator-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultDashboardComponent } from './dashboards/default-dashboard/default-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SettingComponent,
    StudentDashboardComponent,
    AdministratorDashboardComponent,
    DefaultDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
