import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MugsAndGiftsComponent } from './mugs-and-gifts.component';

describe('MugsAndGiftsComponent', () => {
  let component: MugsAndGiftsComponent;
  let fixture: ComponentFixture<MugsAndGiftsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MugsAndGiftsComponent]
    });
    fixture = TestBed.createComponent(MugsAndGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
