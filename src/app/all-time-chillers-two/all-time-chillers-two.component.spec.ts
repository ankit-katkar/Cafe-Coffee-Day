import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeChillersTwoComponent } from './all-time-chillers-two.component';

describe('AllTimeChillersTwoComponent', () => {
  let component: AllTimeChillersTwoComponent;
  let fixture: ComponentFixture<AllTimeChillersTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimeChillersTwoComponent]
    });
    fixture = TestBed.createComponent(AllTimeChillersTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
