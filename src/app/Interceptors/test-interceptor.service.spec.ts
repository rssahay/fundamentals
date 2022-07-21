import { TestBed } from '@angular/core/testing';

import { TestInterceptorService } from './test-interceptor.service';

describe('TestInterceptorService', () => {
  let service: TestInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
