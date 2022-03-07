import { ApiProperty } from '@nestjs/swagger';
import { EmployeeType } from '../../domain/enums/employeeType';

export class EmployeeRequest {
  @ApiProperty()
  employeeType: EmployeeType;

  @ApiProperty()
  employmentDate: Date;
}