import { TestBed } from '@angular/core/testing';

import { TraductoresService } from './traductores.service';

describe('TraductoresService', () => {
  let service: TraductoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraductoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
