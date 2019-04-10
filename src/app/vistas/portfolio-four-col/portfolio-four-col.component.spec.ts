import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFourColComponent } from './portfolio-four-col.component';

describe('PortfolioFourColComponent', () => {
  let component: PortfolioFourColComponent;
  let fixture: ComponentFixture<PortfolioFourColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFourColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFourColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
