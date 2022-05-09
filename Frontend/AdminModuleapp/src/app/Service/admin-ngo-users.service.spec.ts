import { TestBed } from '@angular/core/testing';

import { AdminNgoUsersService } from './admin-ngo-users.service';

describe('AdminNgoUsersService', () => {
  let service: AdminNgoUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminNgoUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
