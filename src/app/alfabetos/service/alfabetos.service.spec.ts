import { TestBed } from '@angular/core/testing';

import { AlfabetosService } from './alfabetos.service';

describe('AlfabetosService', () => {
  let service: AlfabetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlfabetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
