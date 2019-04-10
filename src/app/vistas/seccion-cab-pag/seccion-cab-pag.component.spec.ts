import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCabPagComponent } from './seccion-cab-pag.component';

describe('SeccionCabPagComponent', () => {
  let component: SeccionCabPagComponent;
  let fixture: ComponentFixture<SeccionCabPagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionCabPagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionCabPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
