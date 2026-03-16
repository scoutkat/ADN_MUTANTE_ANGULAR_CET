import { TestBed } from '@angular/core/testing';

import { MutantDetector } from './mutant-detector';

describe('MutantDetector', () => {
  let service: MutantDetector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MutantDetector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
