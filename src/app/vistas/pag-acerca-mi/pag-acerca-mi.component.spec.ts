import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagAcercaMiComponent } from './pag-acerca-mi.component';

describe('PagAcercaMiComponent', () => {
  let component: PagAcercaMiComponent;
  let fixture: ComponentFixture<PagAcercaMiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagAcercaMiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagAcercaMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
