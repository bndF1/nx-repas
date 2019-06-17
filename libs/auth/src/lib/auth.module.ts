import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email'
        })
      ],
      forms: {}
    })
  ]
})
export class AuthModule {}
