import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './components/user-dashboard/user-profile/user-profile.component';
import { UserSettingsComponent } from './components/user-dashboard/user-settings/user-settings.component';
import { UserDefaultComponent } from './components/user-dashboard/user-default/user-default.component';
import { FourOFourComponent } from './pages/four-ofour/four-ofour.component';

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
  { path: '**', component: FourOFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
