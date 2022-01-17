import { TestBed } from '@angular/core/testing';

import { AdminRoleGuardGuard } from './admin-role-guard.guard';

describe('AdminRoleGuardGuard', () => {
  let guard: AdminRoleGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRoleGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
