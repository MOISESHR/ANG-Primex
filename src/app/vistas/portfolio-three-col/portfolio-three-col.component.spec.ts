import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioThreeColComponent } from './portfolio-three-col.component';

describe('PortfolioThreeColComponent', () => {
  let component: PortfolioThreeColComponent;
  let fixture: ComponentFixture<PortfolioThreeColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioThreeColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioThreeColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
