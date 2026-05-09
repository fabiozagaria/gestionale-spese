# Gestionale Spese

Gestionale Spese è un'applicazione web sviluppata in Angular per la gestione di spese personali.

Il progetto nasce come percorso personale di crescita e come progetto portfolio: l'obiettivo non è creare un semplice esercizio, ma costruire progressivamente una piccola applicazione frontend strutturata, manutenibile e pronta per evolvere verso una soluzione full stack.

## Obiettivo del progetto

L'obiettivo principale è realizzare un'applicazione per registrare, visualizzare e analizzare spese personali, applicando buone pratiche di sviluppo frontend moderno.

Attraverso questo progetto sto lavorando su aspetti fondamentali come:

- progettazione di componenti Angular riutilizzabili;
- gestione dello stato lato frontend;
- validazione di form complessi;
- separazione tra logica di presentazione, stato e modello dati;
- organizzazione del codice in ottica scalabile;
- preparazione a una futura integrazione backend.

## Stato attuale del progetto

Il progetto è attualmente in fase di sviluppo.

Al momento l'applicazione permette di navigare tra le pagine principali, inserire una nuova spesa tramite un form reattivo validato e visualizzare un riepilogo iniziale delle spese tramite componenti dedicati.

La persistenza è gestita lato frontend tramite un service Angular con Signals. L'integrazione con storage locale, backend e database è prevista nella roadmap futura.

## Funzionalità implementate

- Home page introduttiva
- Pagina **Aggiungi Spesa**
- Form reattivo per l'inserimento di una spesa
- Campi del form:
  - titolo
  - importo
  - categoria
  - descrizione opzionale
  - data
- Validazione dei campi tramite Angular Reactive Forms
- Gestione grafica degli errori con Bootstrap
- Creazione di un oggetto `Expense`
- Generazione dell'id tramite `crypto.randomUUID()`
- Salvataggio della spesa tramite `SpesaService`
- Stato frontend gestito tramite Angular Signals
- Pagina di riepilogo spese
- Componente figlio per visualizzare una singola spesa come card
- Routing tra Home, Aggiungi Spesa e Riepilogo

## Tecnologie utilizzate

- Angular
- TypeScript
- Bootstrap
- Angular Reactive Forms
- Angular Signals
- Angular Router
- Service Angular per la gestione dello stato
- Git e GitHub
- Deploy futuro su Vercel o piattaforma equivalente

## Architettura e scelte tecniche

Il progetto è organizzato seguendo una separazione chiara delle responsabilità.

Il form non salva direttamente dati sparsi, ma costruisce un oggetto `Expense` che rappresenta il dominio della spesa. Questo approccio rende il codice più leggibile, più semplice da estendere e più vicino a una possibile integrazione backend futura.

Il `SpesaService` è la fonte centrale dello stato lato frontend. Le page component leggono e aggiornano i dati tramite il service, evitando di duplicare logica tra componenti diversi.

La visualizzazione delle singole spese è delegata a un componente figlio, che riceve una singola spesa tramite input e si occupa solo della sua rappresentazione grafica. In futuro questo componente potrà emettere eventi verso il componente padre, ad esempio per eliminare una spesa o aprire una pagina di dettaglio.

In sintesi:

- il form raccoglie e valida i dati;
- la page component orchestra la feature;
- il modello `Expense` rappresenta la struttura del dato;
- il service mantiene lo stato dell'applicazione;
- il componente card visualizza una singola spesa;
- il router gestisce la navigazione tra le viste principali.

## Struttura logica del progetto

```text
src/app
├── components
│   └── expense-list
├── layout
│   ├── footer
│   └── header
├── pages
│   ├── aggiungi-spesa
│   ├── home-page
│   └── riepilogo-spesa
├── services
│   └── spesa-service
├── type
│   └── spesa
└── app.routes.ts
```

La struttura può evolvere con l'aggiunta di nuove feature, come dettaglio spesa, filtri, dashboard e integrazione backend.

## Come avviare il progetto in locale

Clonare il repository:

```bash
git clone <url-del-repository>
```

Entrare nella cartella del progetto:

```bash
cd gestionale-spese
```

Installare le dipendenze:

```bash
npm install
```

Avviare il server di sviluppo:

```bash
npm start
```

L'applicazione sarà disponibile all'indirizzo:

```text
http://localhost:4200/
```

## Validazione form

La pagina **Aggiungi Spesa** utilizza Angular Reactive Forms per gestire validazione e stato del form.

Validazioni attualmente presenti:

- titolo obbligatorio;
- titolo con minimo 3 caratteri;
- titolo con massimo 15 caratteri;
- importo obbligatorio;
- importo maggiore di 0;
- categoria obbligatoria;
- descrizione opzionale con massimo 30 caratteri;
- data obbligatoria.

Gli errori vengono mostrati graficamente con Bootstrap:

- bordo rosso sugli input invalidi;
- messaggi di errore sotto i campi;
- helper methods come `isInvalidField()` e `hasFieldError()` per mantenere il template più leggibile.

## Gestione stato

Lo stato delle spese è gestito lato frontend tramite un service Angular centrale.

Il service mantiene la lista delle spese usando Angular Signals, permettendo ai componenti di leggere uno stato reattivo e aggiornato senza introdurre librerie esterne di state management.

Questa scelta è adatta alla dimensione attuale del progetto e permette di mantenere il codice semplice, esplicito e facilmente estendibile.

## Roadmap futura

Funzionalità previste per le prossime evoluzioni:

- bottone per eliminare una spesa;
- bottone per aprire il dettaglio di una spesa;
- pagina dettaglio con rotta dinamica `/spese/:id`;
- filtri per categoria;
- ricerca testuale per titolo o descrizione;
- totale complessivo delle spese in euro;
- totale delle spese filtrate;
- ordinamento per data o importo;
- grafici con Chart.js o ng2-charts;
- grafico spese per categoria;
- grafico andamento mensile;
- tabella e report avanzati;
- persistenza dati con `localStorage` come primo step;
- backend con Java Spring Boot;
- database MySQL;
- autenticazione;
- gestione utenti;
- dashboard personale;
- budget mensile;
- gestione di entrate e uscite;
- deploy online.

## Cosa sto imparando costruendo questo progetto

Questo progetto mi permette di consolidare competenze pratiche nello sviluppo frontend con Angular, lavorando su un'applicazione che cresce in modo progressivo.

In particolare sto approfondendo:

- progettazione di componenti Angular;
- Reactive Forms e validazione dei dati;
- gestione dello stato con Signals;
- comunicazione tra componenti padre e figlio;
- routing e organizzazione delle pagine;
- separazione tra modello, service e vista;
- scrittura di codice più leggibile e manutenibile;
- ragionamento architetturale in vista di una futura evoluzione full stack.

## Screenshot

Gli screenshot verranno aggiunti nelle prossime versioni del progetto.



## Autore

Progetto sviluppato da **Fabio Zagaria** come progetto personale di crescita e portfolio frontend.

## Nota finale

Gestionale Spese è un progetto in evoluzione. Le funzionalità attuali rappresentano la base dell'applicazione; la roadmap include miglioramenti progressivi orientati a rendere il progetto più completo, realistico e vicino a un'applicazione full stack.
