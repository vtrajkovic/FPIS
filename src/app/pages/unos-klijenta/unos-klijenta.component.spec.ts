import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnosKlijentaComponent } from './unos-klijenta.component';

describe('UnosKlijentaComponent', () => {
  let component: UnosKlijentaComponent;
  let fixture: ComponentFixture<UnosKlijentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnosKlijentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnosKlijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
