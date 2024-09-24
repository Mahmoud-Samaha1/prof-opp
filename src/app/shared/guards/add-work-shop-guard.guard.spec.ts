import { TestBed } from '@angular/core/testing';

import { AddWorkShopGuardGuard } from './add-work-shop-guard.guard';

describe('AddWorkShopGuardGuard', () => {
  let guard: AddWorkShopGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddWorkShopGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
