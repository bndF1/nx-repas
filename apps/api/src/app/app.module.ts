import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainModule } from './domain/domain.module';
import { RestModule } from './rest/rest.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [TypeOrmModule.forRoot(), RestModule, DomainModule, ServiceModule],
  controllers: [],
  providers: []
})
export class AppModule {}
