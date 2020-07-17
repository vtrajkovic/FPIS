import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRacunComponent } from './dialog-racun.component';

describe('DialogRacunComponent', () => {
  let component: DialogRacunComponent;
  let fixture: ComponentFixture<DialogRacunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRacunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRacunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
