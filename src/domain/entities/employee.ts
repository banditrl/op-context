import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { EmployeeType } from '../enums/employeeType';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeType: EmployeeType;

  @Column()
  employmentDate: Date;
}