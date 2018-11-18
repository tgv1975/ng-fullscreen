import { Directive, HostListener } from '@angular/core';
import { FullscreenService } from './fullscreen.service';
import * as screenfull from 'screenfull';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[toggleFullscreen]'
})
export class ToggleFullscreenDirective {

    private _fullscreenLib;
    set fullscreenLib(lib) {
        this._fullscreenLib = lib;
    }
    get fullscreenLib() {
        return this._fullscreenLib;
    }

    constructor() {
        this.fullscreenLib = screenfull;
    }

    @HostListener('click') onClick() {
        if (this._fullscreenLib.enabled) {
            this._fullscreenLib.toggle();
        }
    }
}
