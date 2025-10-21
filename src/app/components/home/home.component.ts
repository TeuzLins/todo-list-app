import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo = 'Sistema de Gerenciamento de Tarefas';
  descricao = 'Organize suas atividades de forma simples e eficiente';
}
