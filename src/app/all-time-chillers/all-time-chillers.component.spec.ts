import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeChillersComponent } from './all-time-chillers.component';

describe('AllTimeChillersComponent', () => {
  let component: AllTimeChillersComponent;
  let fixture: ComponentFixture<AllTimeChillersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimeChillersComponent]
    });
    fixture = TestBed.createComponent(AllTimeChillersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
