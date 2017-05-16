import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
=======
>>>>>>> b1d973d1cb81e09b21200840e99012e0a3f9e3fb

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment'

import 'hammerjs';
<<<<<<< HEAD

import {HomeModule} from './home/home.module';
=======
>>>>>>> b1d973d1cb81e09b21200840e99012e0a3f9e3fb

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HomeModule
=======
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
>>>>>>> b1d973d1cb81e09b21200840e99012e0a3f9e3fb
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
