import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTwoColComponent } from './portfolio-two-col.component';

describe('PortfolioTwoColComponent', () => {
  let component: PortfolioTwoColComponent;
  let fixture: ComponentFixture<PortfolioTwoColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioTwoColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioTwoColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
