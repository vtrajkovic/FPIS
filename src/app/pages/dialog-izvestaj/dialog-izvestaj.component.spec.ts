import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogIzvestajComponent } from './dialog-izvestaj.component';

describe('DialogIzvestajComponent', () => {
  let component: DialogIzvestajComponent;
  let fixture: ComponentFixture<DialogIzvestajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogIzvestajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogIzvestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
