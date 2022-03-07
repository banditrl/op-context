import { Employee } from 'src/domain/entities/employee';
import { IEmployeeStrategy } from '../interfaces/IEmployeeStrategy';

export class InternEmployeeStrategy implements IEmployeeStrategy {

  private readonly _fixedDiscount: number = 0.05;

  private readonly _amountToReceiveDiscount: number = 30;

  public apply(amount: number, employee: Employee): number {
    if (amount > this._amountToReceiveDiscount)
      return amount - (amount * this._fixedDiscount);

    return amount;
  };
}