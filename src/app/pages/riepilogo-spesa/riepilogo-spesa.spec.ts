import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoSpesa } from './riepilogo-spesa';

describe('RiepilogoSpesa', () => {
  let component: RiepilogoSpesa;
  let fixture: ComponentFixture<RiepilogoSpesa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiepilogoSpesa],
    }).compileComponents();

    fixture = TestBed.createComponent(RiepilogoSpesa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
