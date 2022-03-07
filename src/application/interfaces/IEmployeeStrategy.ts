import { Employee } from 'src/domain/entities/employee';

export interface IEmployeeStrategy {
  apply: (amount: number, employee: Employee) => number
}