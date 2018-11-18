import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as screenfull from 'screenfull';

@Injectable({
    providedIn: 'root'
})
export class FullscreenService {

    private _fullscreenLib;
    set fullscreenLib(lib) {
        this._fullscreenLib = lib;
    }
    get fullscreenLib() {
        return this._fullscreenLib;
    }

    private _isFullscreen: BehaviorSubject<boolean> = new BehaviorSubject(false);
    fullscreen$: Observable<boolean> = this._isFullscreen.asObservable();

    constructor() {
        this.fullscreenLib = screenfull;
        this._fullscreenLib.onchange(() => this._isFullscreen.next(this._fullscreenLib.isFullscreen));
    }
}
