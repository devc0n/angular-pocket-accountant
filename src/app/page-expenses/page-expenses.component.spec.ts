import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExpensesComponent } from './page-expenses.component';

describe('PageExpensesComponent', () => {
  let component: PageExpensesComponent;
  let fixture: ComponentFixture<PageExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
