import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import {FormsModule} from '@angular/forms';
import {ProfileComponent} from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ServiceDialogComponent} from './service-dialog/service-dialog.component';
import {PageDashboardComponent} from './page-dashboard/page-dashboard.component';
import {PageIncomeComponent} from './page-income/page-income.component';
import {PageExpensesComponent} from './page-expenses/page-expenses.component';
import {PageOverviewComponent} from './page-overview/page-overview.component';
import {InvoiceDialogComponent} from './invoice-dialog/invoice-dialog.component';
import {ExpenseDialogComponent} from './expense-dialog/expense-dialog.component';
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    ProfileComponent,
    NavBarComponent,
    ServiceDialogComponent,
    PageDashboardComponent,
    PageIncomeComponent,
    PageExpensesComponent,
    PageOverviewComponent,
    InvoiceDialogComponent,
    ExpenseDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InvoiceDialogComponent,
    ExpenseDialogComponent
  ]
})
export class AppModule {
}
