import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

import { MdToolbarModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';

import { GuardService } from '../shared/services/guard.service';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  providers: [GuardService]
})
export class CoreModule { }
