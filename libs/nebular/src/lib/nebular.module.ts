import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbLayoutModule
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbActionsModule
  ],
  exports: [NbLayoutModule, NbButtonModule, NbCardModule, NbActionsModule]
})
export class NebularModule {}
