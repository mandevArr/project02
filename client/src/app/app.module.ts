import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserSettingsComponent } from './components/user-dashboard/user-settings/user-settings.component';
import { UserProfileComponent } from './components/user-dashboard/user-profile/user-profile.component';
import { UserDefaultComponent } from './components/user-dashboard/user-default/user-default.component';
import { FourOFourComponent } from './pages/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { UserManagementService } from './services/user-management.service';
import { OAuth2Service } from './services/oauth2.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UserDefaultComponent,
    FourOFourComponent,
    HomeComponent,
    LoginDialogComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
  ],
  providers: [
    UserManagementService,
    OAuth2Service,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
