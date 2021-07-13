import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSliderModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserDefaultComponent } from './pages/user-default/user-default.component';
import { FourOFourComponent } from './pages/four-ofour/four-ofour.component';

@NgModule({
  declarations: [AppComponent, UserDashboardComponent, UserProfileComponent, UserSettingsComponent, UserDefaultComponent, FourOFourComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatSliderModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
