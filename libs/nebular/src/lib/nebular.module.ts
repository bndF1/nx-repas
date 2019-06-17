import {
  NbLayoutModule,
  NbButtonModule,
  NbCardComponent,
  NbCardModule
} from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, NbLayoutModule, NbButtonModule, NbCardModule],
  exports: [NbLayoutModule, NbButtonModule, NbCardModule]
})
export class NebularModule {}
