import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  welcome = 'todoapp';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear Lista'
  ];
}
