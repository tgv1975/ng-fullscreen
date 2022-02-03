import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import screenfull from 'screenfull';

@Injectable({
    providedIn: 'root'
})
export class FullscreenService {
    private fullscreen: BehaviorSubject<boolean> = new BehaviorSubject(false);
    fullscreen$: Observable<boolean> = this.fullscreen.asObservable();

    constructor() {
        if (screenfull.isEnabled) {
            screenfull.onchange(() => this.fullscreen.next(screenfull.isFullscreen));
        }
    }

    async setFullScreen(value: boolean) {
        if (!screenfull.isEnabled) {
            return;
        }

        value
            ? await screenfull.request()
            : await screenfull.exit();
    }
}
