import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../../domain/entities/employee';
import { EmployeeType } from '../../domain/enums/employeeType';
import { ContractorEmployeeStrategy } from '../helpers/ContractorEmployeeStrategy';
import { InternEmployeeStrategy } from '../helpers/InternEmployeeStrategy';
import { PartTimeEmployeeStrategy } from '../helpers/PartTimeEmployeeStrategy';
import { PermanentEmployeeStrategy } from '../helpers/PermanentEmployeeStrategy';
import { IEmployeeStrategy } from '../interfaces/IEmployeeStrategy';
import { EmployeeRequest } from '../maps/employeeRequest';

@Injectable()
export class EmployeeService {
  private readonly employeeStrategy: ReadonlyMap<EmployeeType, IEmployeeStrategy> = new Map<EmployeeType, IEmployeeStrategy>([
    [EmployeeType.Permanent, new PermanentEmployeeStrategy()],
    [EmployeeType.PartTime, new PartTimeEmployeeStrategy()],
    [EmployeeType.Intern, new InternEmployeeStrategy()],
    [EmployeeType.Contractor, new ContractorEmployeeStrategy()],
  ]);

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>
  ) { }

  public async add(employee: EmployeeRequest): Promise<number> {
    const result = await this.employeeRepository.insert(employee);

    return result.generatedMaps[0].id;
  }

  public async applyDiscount(amount: number, id: number): Promise<number> {
    const employee = await this.employeeRepository.findOne(id);

    const discountedValue = this.employeeStrategy.get(employee.employeeType).apply(amount, employee);

    return discountedValue;
  }
}
