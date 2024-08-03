import { TestBed } from '@angular/core/testing';

import { AddProService } from './add-pro.service';

describe('AddProService', () => {
  let service: AddProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
