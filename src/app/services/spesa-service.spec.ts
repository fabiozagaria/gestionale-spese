import { TestBed } from '@angular/core/testing';

import { SpesaService } from './spesa-service';

describe('SpesaService', () => {
  let service: SpesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
