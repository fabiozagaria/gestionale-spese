import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiSpesa } from './aggiungi-spesa';

describe('AggiungiSpesa', () => {
  let component: AggiungiSpesa;
  let fixture: ComponentFixture<AggiungiSpesa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiSpesa],
    }).compileComponents();

    fixture = TestBed.createComponent(AggiungiSpesa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
