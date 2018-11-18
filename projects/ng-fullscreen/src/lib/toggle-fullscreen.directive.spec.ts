import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ToggleFullscreenDirective } from './toggle-fullscreen.directive';

@Component(
    {
        selector: 'lib-test-component',
        template: '<button toggleFullscreen>Toggle Fullscreen</button>'
    }
)
class HostComponent { }

describe('ToggleFullscreenDirective', () => {
    let fixture: ComponentFixture<HostComponent>;
    let debugEl: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ToggleFullscreenDirective,
                HostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HostComponent);
        debugEl = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        const directive = new ToggleFullscreenDirective();
        expect(directive).toBeTruthy();
    });

    it('should have the fullscreen lib enabled', () => {
        const directive = new ToggleFullscreenDirective();
        expect(directive.fullscreenLib.enabled).toBe(true);
    });

    it('should call fullscreen toggle when onClick() called and lib enabled', () => {
        const directive = new ToggleFullscreenDirective();
        // This is a trick. "enabled" is a property in fullscreenLib, but a mock method here,
        // therefore truthy.
        const screenfull = jasmine.createSpyObj('screenfull', ['enabled', 'toggle']);

        directive.fullscreenLib = screenfull;

        directive.onClick();

        expect(screenfull.toggle).toHaveBeenCalled();
    });

    it('should not call fullscreen toggle when onClick() called and lib disabled', () => {
        const directive = new ToggleFullscreenDirective();
        // This is a trick. "enabled" is a property in fullscreenLib, but a mock method above,
        // therefore not declaring it makes it falsey.
        const screenfull = jasmine.createSpyObj('screenfull', ['toggle']);

        directive.fullscreenLib = screenfull;

        directive.onClick();

        expect(screenfull.toggle).not.toHaveBeenCalled();
    });

    it('should respond to host component click', async () => {
        const directiveEl = debugEl.queryAll(By.directive(ToggleFullscreenDirective))[0];
        const directiveRef = directiveEl.injector.get(ToggleFullscreenDirective);
        const clickSpy = spyOn(directiveRef, 'onClick');

        directiveEl.triggerEventHandler('click', null);

        expect(clickSpy).toHaveBeenCalled();
    });

});
