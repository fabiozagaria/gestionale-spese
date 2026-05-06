import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './dumbs/header/header';
import { Footer } from './dumbs/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
