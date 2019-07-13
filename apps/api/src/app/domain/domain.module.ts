import { Module } from '@nestjs/common';
import { Schedule } from './schedule/schedule';
import { Turn } from './turn/turn';
import { User } from './user/user';

@Module({
  exports: [Turn, Schedule, User]
})
export class DomainModule {}
