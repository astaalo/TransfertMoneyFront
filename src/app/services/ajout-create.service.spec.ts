import { TestBed } from '@angular/core/testing';

import { AjoutCreateService } from './ajout-create.service';

describe('AjoutCreateService', () => {
  let service: AjoutCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
