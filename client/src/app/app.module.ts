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
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UserDashboardComponent, UserHomeComponent],
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
