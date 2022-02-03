import { Directive, HostListener } from '@angular/core';
import screenfull from 'screenfull';

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

    @HostListener('click') onClick() {
        if (this._fullscreenLib.isEnabled) {
            this._fullscreenLib.toggle();
        }
    }

    constructor() {
        this.fullscreenLib = screenfull;
    }
}
