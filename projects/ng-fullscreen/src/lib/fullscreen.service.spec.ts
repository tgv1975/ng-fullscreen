import { TestBed } from '@angular/core/testing';

import { FullscreenService } from './fullscreen.service';

describe('FullscreenService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FullscreenService = TestBed.get(FullscreenService);
        expect(service).toBeTruthy();
    });

    it('should get fullscreen lib as previously set', () => {
        const service: FullscreenService = TestBed.get(FullscreenService);
        const mockLib = { dummy: 'dummy' };

        service.fullscreenLib = mockLib;

        expect(service.fullscreenLib).toEqual(mockLib);
    });
});
