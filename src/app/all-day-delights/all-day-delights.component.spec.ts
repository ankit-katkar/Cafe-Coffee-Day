import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDayDelightsComponent } from './all-day-delights.component';

describe('AllDayDelightsComponent', () => {
  let component: AllDayDelightsComponent;
  let fixture: ComponentFixture<AllDayDelightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDayDelightsComponent]
    });
    fixture = TestBed.createComponent(AllDayDelightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
