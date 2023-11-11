import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeFinderComponent } from './cafe-finder.component';

describe('CafeFinderComponent', () => {
  let component: CafeFinderComponent;
  let fixture: ComponentFixture<CafeFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CafeFinderComponent]
    });
    fixture = TestBed.createComponent(CafeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
