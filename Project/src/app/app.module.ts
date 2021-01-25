import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StartComponent } from './components/start/start.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HomeComponent } from './components/home/home.component'
import { TabsComponent } from './components/tabs/tabs.component';
import { OverallComponent } from './components/overall/overall.component';

import { AppRoutingModule } from './core/app-routing.module'
import { CustomMaterialModule } from "./core/material.module";





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StartComponent,
    OverviewComponent,
    HomeComponent,
    TabsComponent,
    OverallComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
