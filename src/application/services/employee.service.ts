import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';
import { Employee } from '../../domain/entities/employee';
import { EmployeeRequest } from '../maps/employeeRequest';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private usersRepository: Repository<Employee>,
  ) {}

  public async add(employee: EmployeeRequest): Promise<number> {
    var result = await this.usersRepository.insert(employee);

    return result.generatedMaps[0].id;
  }

  public async applyDiscount(amount: number, id: number): Promise<number> {
    var employee = await this.usersRepository.findOne(id);

    return employee.id;
  }
}
