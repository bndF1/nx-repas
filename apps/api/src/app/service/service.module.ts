import { Module } from '@nestjs/common';
import { TurnService } from './turn/turn.service';

@Module({
  providers: [],
  exports: [TurnService]
})
export class ServiceModule {}
