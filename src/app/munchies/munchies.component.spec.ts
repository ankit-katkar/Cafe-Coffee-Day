import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunchiesComponent } from './munchies.component';

describe('MunchiesComponent', () => {
  let component: MunchiesComponent;
  let fixture: ComponentFixture<MunchiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunchiesComponent]
    });
    fixture = TestBed.createComponent(MunchiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
