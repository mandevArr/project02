import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';


const routes: Routes = [
  {
    path: 'user',
    component: UserHomeComponent,
    children: [{ path: 'dashboard', component: UserDashboardComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
