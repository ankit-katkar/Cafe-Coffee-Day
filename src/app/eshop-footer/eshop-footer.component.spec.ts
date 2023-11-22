import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopFooterComponent } from './eshop-footer.component';

describe('EshopFooterComponent', () => {
  let component: EshopFooterComponent;
  let fixture: ComponentFixture<EshopFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EshopFooterComponent]
    });
    fixture = TestBed.createComponent(EshopFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
