import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaRacunaComponent } from './izmena-racuna.component';

describe('IzmenaRacunaComponent', () => {
  let component: IzmenaRacunaComponent;
  let fixture: ComponentFixture<IzmenaRacunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaRacunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaRacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
