import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitGraphComponent } from './profit-graph.component';

describe('ProfitGraphComponent', () => {
  let component: ProfitGraphComponent;
  let fixture: ComponentFixture<ProfitGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
