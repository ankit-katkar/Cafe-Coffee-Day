import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopHeaderComponent } from './eshop-header.component';

describe('EshopHeaderComponent', () => {
  let component: EshopHeaderComponent;
  let fixture: ComponentFixture<EshopHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EshopHeaderComponent]
    });
    fixture = TestBed.createComponent(EshopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
