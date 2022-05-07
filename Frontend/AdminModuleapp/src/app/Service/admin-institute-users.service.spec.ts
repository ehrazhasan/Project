import { TestBed } from '@angular/core/testing';

import { AdminInstituteUsersService } from './admin-institute-users.service';

describe('AdminInstituteUsersService', () => {
  let service: AdminInstituteUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInstituteUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
