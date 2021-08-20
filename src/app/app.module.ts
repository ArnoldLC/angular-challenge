import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyComponent } from './agency/agency.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AgencyDetailComponent } from './agency-detail/agency-detail.component';
import { AgencyListComponent } from './agency-list/agency-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,
    AgencyDetailComponent,
    AgencyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
