import { NgModule } from '@angular/core';

import { FullscreenService } from './fullscreen.service';
import { ToggleFullscreenDirective } from './toggle-fullscreen.directive';

@NgModule({
    declarations: [ToggleFullscreenDirective],
    imports: [],
    exports: [ToggleFullscreenDirective],
    providers: [FullscreenService]
})
export class FullscreenModule { }
