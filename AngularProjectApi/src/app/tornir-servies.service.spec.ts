import { TestBed, inject } from '@angular/core/testing';

import { TornirServiesService } from './tornir-servies.service';

describe('TornirServiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TornirServiesService]
    });
  });

  it('should be created', inject([TornirServiesService], (service: TornirServiesService) => {
    expect(service).toBeTruthy();
  }));
});
