import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { UserDefaultComponent } from './pages/user-default/user-default.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserDashboardComponent,
    children: [
      { path: 'settings', component: UserSettingsComponent },
      { path: 'profiles', component: UserProfileComponent },
      { path: '', component: UserDefaultComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
