import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeAndTeaComponent } from './coffee-and-tea.component';

describe('CoffeeAndTeaComponent', () => {
  let component: CoffeeAndTeaComponent;
  let fixture: ComponentFixture<CoffeeAndTeaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeAndTeaComponent]
    });
    fixture = TestBed.createComponent(CoffeeAndTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
