import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../domain/entities/employee';
import { EmployeeService } from '../application/services/employee.service';
import { EmployeeController } from '../api/controllers/employee.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}