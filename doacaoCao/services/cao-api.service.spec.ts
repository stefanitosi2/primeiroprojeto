import { TestBed } from '@angular/core/testing';

import { CaoApiService } from './cao-api.service';

describe('CaoApiService', () => {
  let service: CaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
