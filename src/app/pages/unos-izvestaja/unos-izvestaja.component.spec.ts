import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosIzvestajaComponent } from './unos-izvestaja.component';

describe('UnosIzvestajaComponent', () => {
  let component: UnosIzvestajaComponent;
  let fixture: ComponentFixture<UnosIzvestajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosIzvestajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosIzvestajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
