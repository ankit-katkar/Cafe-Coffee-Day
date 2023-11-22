import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetToothX32Component } from './sweet-tooth-x32.component';

describe('SweetToothX32Component', () => {
  let component: SweetToothX32Component;
  let fixture: ComponentFixture<SweetToothX32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetToothX32Component]
    });
    fixture = TestBed.createComponent(SweetToothX32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
