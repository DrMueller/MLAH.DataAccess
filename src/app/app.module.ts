import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgBaseServicesModule } from '@drmueller/ng-base-services';

import { AppComponent } from './app.component';
import { PlaceholderHttpService } from './data-access/http/placeholder-http.service';
import { PostRepositoryService } from './data-access/post-repository.service';

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
    PlaceholderHttpService,
    PostRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
