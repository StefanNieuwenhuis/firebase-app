import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

import { MdToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class CoreModule { }
