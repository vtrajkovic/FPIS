import { TestBed } from '@angular/core/testing';

import { MetodeAPIService } from './metode-api.service';

describe('MetodeAPIService', () => {
  let service: MetodeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetodeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
