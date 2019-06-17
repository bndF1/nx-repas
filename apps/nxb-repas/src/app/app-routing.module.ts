import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@nxb-repas/ui-shell';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@nxb-repas/auth').then(m => m.AuthModule)
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
