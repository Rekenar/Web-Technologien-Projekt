import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StartComponent } from './start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button'
import {MatFormFieldModule } from '@angular/material/form-field'
import {MatCardModule } from '@angular/material/card'
import {MatInputModule } from '@angular/material/input'
import {MatToolbarModule } from '@angular/material/toolbar';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component'
import {MatTableModule}from '@angular/material/table'
import {MatSortModule}from '@angular/material/sort'
import {MatPaginatorModule}from '@angular/material/paginator';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StartComponent,
    OverviewComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
