import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPiePagComponent } from './seccion-pie-pag.component';

describe('SeccionPiePagComponent', () => {
  let component: SeccionPiePagComponent;
  let fixture: ComponentFixture<SeccionPiePagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionPiePagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPiePagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
