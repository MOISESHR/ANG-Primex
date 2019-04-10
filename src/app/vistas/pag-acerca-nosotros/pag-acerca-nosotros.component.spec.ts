import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagAcercaNosotrosComponent } from './pag-acerca-nosotros.component';

describe('PagAcercaNosotrosComponent', () => {
  let component: PagAcercaNosotrosComponent;
  let fixture: ComponentFixture<PagAcercaNosotrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagAcercaNosotrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagAcercaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
