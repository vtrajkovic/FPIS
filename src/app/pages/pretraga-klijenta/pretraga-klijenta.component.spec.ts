import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaKlijentaComponent } from './pretraga-klijenta.component';

describe('PretragaKlijentaComponent', () => {
  let component: PretragaKlijentaComponent;
  let fixture: ComponentFixture<PretragaKlijentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaKlijentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaKlijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
