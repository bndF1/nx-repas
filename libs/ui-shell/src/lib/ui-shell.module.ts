import { NebularModule } from '@nxb-repas/nebular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, NebularModule],
  declarations: [MainComponent]
})
export class UiShellModule {}
