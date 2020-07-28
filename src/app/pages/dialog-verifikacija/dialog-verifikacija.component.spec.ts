import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVerifikacijaComponent } from './dialog-verifikacija.component';

describe('DialogVerifikacijaComponent', () => {
  let component: DialogVerifikacijaComponent;
  let fixture: ComponentFixture<DialogVerifikacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogVerifikacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVerifikacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
