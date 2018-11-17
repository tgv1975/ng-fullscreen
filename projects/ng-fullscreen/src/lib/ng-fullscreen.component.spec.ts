import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFullscreenComponent } from './ng-fullscreen.component';

describe('NgFullscreenComponent', () => {
  let component: NgFullscreenComponent;
  let fixture: ComponentFixture<NgFullscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFullscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
