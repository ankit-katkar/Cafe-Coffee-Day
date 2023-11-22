import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseEnquiryComponent } from './lease-enquiry.component';

describe('LeaseEnquiryComponent', () => {
  let component: LeaseEnquiryComponent;
  let fixture: ComponentFixture<LeaseEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaseEnquiryComponent]
    });
    fixture = TestBed.createComponent(LeaseEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
