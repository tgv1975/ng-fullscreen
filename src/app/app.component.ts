import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FullscreenService } from 'ng-fullscreen';

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
}
