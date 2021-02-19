import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FullscreenService } from './../../projects/ng-fullscreen/src/lib/fullscreen.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    title = 'fullscreen-angular';
    buttonText: string;
    ngUnsubscribe: Subject<any> = new Subject<any>();

    constructor(private fss: FullscreenService) {
        fss.fullscreen$
            .subscribe(is => console.log(is));

        fss.fullscreen$
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((isFullscreen) => {
                isFullscreen
                    ? this.buttonText = 'Exit Fullscreen'
                    : this.buttonText = 'Enter Fullscreen';
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    setFullScreen(value: boolean) {
        this.fss.setFullScreen(value);
    }
}
