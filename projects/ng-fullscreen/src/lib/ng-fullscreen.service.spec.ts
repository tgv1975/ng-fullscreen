import { TestBed } from '@angular/core/testing';

import { NgFullscreenService } from './ng-fullscreen.service';

describe('NgFullscreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFullscreenService = TestBed.get(NgFullscreenService);
    expect(service).toBeTruthy();
  });
});
