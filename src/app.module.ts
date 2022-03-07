import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './api/controllers/app.controller';
import { AppService } from './application/services/app.service';
import { EmployeeModule } from './modules/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
