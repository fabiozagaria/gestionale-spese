import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AggiungiSpesa } from './pages/aggiungi-spesa/aggiungi-spesa';
import { RiepilogoSpesa } from './pages/riepilogo-spesa/riepilogo-spesa';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Home | Gestionale Spese'
  },
  {
    path: 'aggiungi-spesa',
    component: AggiungiSpesa,
    title: 'Aggiungi Spesa | Gestionale Spese'
  },
  {
    path: 'riepilogo',
    component: RiepilogoSpesa,
    title: 'Riepilogo | Gestionale Spese'
  }
];
