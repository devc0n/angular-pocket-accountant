import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuard} from './auth.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorService} from './interceptor.service';
import {ProfileComponent} from './profile/profile.component';
import {PageDashboardComponent} from "./page-dashboard/page-dashboard.component";


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: PageDashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule {
}
