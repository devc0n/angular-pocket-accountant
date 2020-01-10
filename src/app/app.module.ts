import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import {FormsModule} from "@angular/forms";
import {ProfileComponent} from "./profile/profile.component";
import {HttpClientModule} from "@angular/common/http";
import { ExternalApiComponent } from './external-api/external-api.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PostDialogComponent,
    ProfileComponent,
    ExternalApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    PostDialogComponent
  ]
})
export class AppModule {
}
