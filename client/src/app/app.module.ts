import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSettingsComponent } from './components/user-dashboard/user-settings/user-settings.component';
import { UserProfileComponent } from './components/user-dashboard/user-profile/user-profile.component';
import { UserDefaultComponent } from './components/user-dashboard/user-default/user-default.component';
import { FourOFourComponent } from './pages/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UserDefaultComponent,
    FourOFourComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
