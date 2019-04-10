import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCarouselComponent } from './seccion-carousel.component';

describe('SeccionCarouselComponent', () => {
  let component: SeccionCarouselComponent;
  let fixture: ComponentFixture<SeccionCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
