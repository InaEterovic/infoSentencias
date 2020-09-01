import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasDelitoComponent } from './estadisticas-delito.component';

describe('EstadisticasDelitoComponent', () => {
  let component: EstadisticasDelitoComponent;
  let fixture: ComponentFixture<EstadisticasDelitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasDelitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasDelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
