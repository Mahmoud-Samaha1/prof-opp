import { TestBed } from '@angular/core/testing';

import { OnlineSessionsService } from './online-sessions.service';

describe('OnlineSessionsService', () => {
  let service: OnlineSessionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineSessionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
