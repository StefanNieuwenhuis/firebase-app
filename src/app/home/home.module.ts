import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {AuthGuard} from '../shared/guards/auth.guard';
import {GuardService} from '../shared/services/guard.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [AuthGuard, GuardService]
})
export class HomeModule { }
