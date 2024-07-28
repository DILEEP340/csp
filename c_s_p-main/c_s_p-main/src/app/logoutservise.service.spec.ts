import { TestBed } from '@angular/core/testing';

import { LogoutserviseService } from './logoutservise.service';

describe('LogoutserviseService', () => {
  let service: LogoutserviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutserviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
