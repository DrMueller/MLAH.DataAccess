import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgBaseServicesModule } from '@drmueller/ng-base-services';

import { AppComponent } from './app.component';
import * as dataAccess from './data-access';
import * as http from './data-access/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgBaseServicesModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    http.PlaceholderHttpService,
    dataAccess.PostRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
