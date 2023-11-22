import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalInfoComponent } from './nutritional-info.component';

describe('NutritionalInfoComponent', () => {
  let component: NutritionalInfoComponent;
  let fixture: ComponentFixture<NutritionalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutritionalInfoComponent]
    });
    fixture = TestBed.createComponent(NutritionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
