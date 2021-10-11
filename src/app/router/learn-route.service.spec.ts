import { TestBed } from '@angular/core/testing';

import { LearnRouteService } from './learn-route.service';

describe('LearnRouteService', () => {
  let service: LearnRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
