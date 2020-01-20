import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIncomeComponent } from './page-income.component';

describe('PageIncomeComponent', () => {
  let component: PageIncomeComponent;
  let fixture: ComponentFixture<PageIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
