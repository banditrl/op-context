import { Employee } from 'src/domain/entities/employee';
import { IEmployeeStrategy } from '../interfaces/IEmployeeStrategy';

export class ContractorEmployeeStrategy implements IEmployeeStrategy {

  apply = (amount: number, employee: Employee): number => amount;
}