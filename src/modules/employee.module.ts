import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from '../application/services/employee.service';
import { EmployeeController } from '../api/controllers/employee.controller';
import { Employee } from 'src/domain/entities/employee';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}