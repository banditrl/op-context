import { Employee } from 'src/domain/entities/employee';
import { IEmployeeStrategy } from '../interfaces/IEmployeeStrategy';

export class PermanentEmployeeStrategy implements IEmployeeStrategy {

  private readonly _fixedDiscount: number = 0.10;
  private readonly _discountByDate: number = 0.15;

  private readonly _yearsToReceiveDiscountByDate: number = 3;

  public apply(amount: number, employee: Employee): number {
    if (new Date().getFullYear() - employee.employmentDate.getFullYear() >= this._yearsToReceiveDiscountByDate)
      return amount - (amount * this._discountByDate);

    return amount - (amount * this._fixedDiscount);
  };
}