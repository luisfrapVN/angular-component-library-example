import { TestBed } from '@angular/core/testing';

import { cLibraryService } from './cLibrary.service';

describe('cLibraryService', () => {
  let service: cLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
