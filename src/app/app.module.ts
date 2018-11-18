import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FullscreenModule } from 'ng-fullscreen';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FullscreenModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
