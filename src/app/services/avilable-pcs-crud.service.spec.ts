import { TestBed } from '@angular/core/testing';

import { AvilablePcsCrudService } from './avilable-pcs-crud.service';

describe('AvilablePcsCrudService', () => {
  let service: AvilablePcsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvilablePcsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
