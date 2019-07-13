import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NebularModule } from '@nxb-repas/nebular';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, NebularModule],
  declarations: [MainComponent],
  exports: []
})
export class UiShellModule {}
