import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EmployeeRequest } from '../../application/maps/employeeRequest'
import { EmployeeService } from '../../application/services/employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('add')
  async addEmployee(@Body() employee : EmployeeRequest) {
    const employeeId = await this.employeeService.add(employee);

    return `The employee has been successfully created. Your id is: ${employeeId}`;
  }

  @Get('apply-discount')
  async applyEmployeeDiscount(@Query('amount') amount: number, @Query('employeeId') id: number) {
    return await this.employeeService.applyDiscount(amount, id);
  }
}
