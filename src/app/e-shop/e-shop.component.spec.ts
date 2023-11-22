import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EShopComponent } from './e-shop.component';

describe('EShopComponent', () => {
  let component: EShopComponent;
  let fixture: ComponentFixture<EShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EShopComponent]
    });
    fixture = TestBed.createComponent(EShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
