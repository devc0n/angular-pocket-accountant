import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuard} from './auth.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorService} from './interceptor.service';
import {ProfileComponent} from './profile/profile.component';
import {PageDashboardComponent} from './page-dashboard/page-dashboard.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageIncomeComponent} from './page-income/page-income.component';
import {PageExpensesComponent} from './page-expenses/page-expenses.component';
import {PageOverviewComponent} from './page-overview/page-overview.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: PageDashboardComponent, canActivate: [AuthGuard]},
  {path: 'old-dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'income', component: PageIncomeComponent, canActivate: [AuthGuard]},
  {path: 'expenses', component: PageExpensesComponent, canActivate: [AuthGuard]},
  {path: 'overview', component: PageOverviewComponent, canActivate: [AuthGuard]},
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
