import { TestBed } from '@angular/core/testing';

import { VolApplyInfoService } from './vol-apply-info.service';

describe('VolApplyInfoService', () => {
  let service: VolApplyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolApplyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
