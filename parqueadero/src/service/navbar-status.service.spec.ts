import { TestBed } from '@angular/core/testing';

import { NavbarStatusService } from './navbar-status.service';

describe('NavbarStatusService', () => {
  let service: NavbarStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
