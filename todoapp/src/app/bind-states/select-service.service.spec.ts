import { TestBed } from '@angular/core/testing';

import { SelectServiceService } from './select-service.service';

describe('SelectServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectServiceService = TestBed.get(SelectServiceService);
    expect(service).toBeTruthy();
  });
});
