import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { booksAuthGuard } from './books-auth.guard';

describe('booksAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => booksAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
