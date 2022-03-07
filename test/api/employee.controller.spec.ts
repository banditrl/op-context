import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from '../../src/api/controllers/employee.controller';
import { EmployeeModule } from '../../src/modules/employee.module';
import { AppController } from '../../src/api/controllers/app.controller';
import { AppService } from '../../src/application/services/app.service';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(),
        EmployeeModule
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    employeeController = app.get<EmployeeController>(EmployeeController);
  });

  describe('root', () => {
    it('should return "The employee has been successfully created"', () => {
      expect(employeeController.addEmployee({ employeeType: 0, employmentDate: new Date()}))
      .toBe('The employee has been successfully created. Your id is: 0');
    });
  });
});
