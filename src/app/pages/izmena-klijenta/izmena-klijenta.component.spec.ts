import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaKlijentaComponent } from './izmena-klijenta.component';

describe('IzmenaKlijentaComponent', () => {
  let component: IzmenaKlijentaComponent;
  let fixture: ComponentFixture<IzmenaKlijentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaKlijentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaKlijentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
