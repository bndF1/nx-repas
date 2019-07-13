import { Module } from '@nestjs/common';
import { TurnController } from './turn/turn.controller';

@Module({
  controllers: [TurnController]
})
export class RestModule {}
