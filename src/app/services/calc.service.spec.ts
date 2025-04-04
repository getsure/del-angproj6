import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';

fdescribe('CalcService', () => {
  let service: CalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('validate the addition result is equal to 8', () => {
     const addResult = service.addOperation(5,3)
    expect(addResult).toBe(8)
  });
  it('validate the sub result is equal to 2', () => {
    const subResult = service.subOperation(5,3)
   expect(subResult).toBe(2)
 });
 
});
