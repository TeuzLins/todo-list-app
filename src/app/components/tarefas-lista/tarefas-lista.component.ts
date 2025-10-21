import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefas-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tarefas-lista.component.html',
  styleUrl: './tarefas-lista.component.css'
})
export class TarefasListaComponent implements OnInit {
  tarefas: Tarefa[] = [];
  filtro: 'todas' | 'pendentes' | 'concluidas' = 'todas';

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefas = this.tarefaService.listarTodas();
  }

  excluir(id: number): void {
    if (confirm('Deseja realmente excluir esta tarefa?')) {
      this.tarefaService.excluir(id);
      this.carregarTarefas();
    }
  }

  alternarConclusao(id: number): void {
    this.tarefaService.alternarConclusao(id);
    this.carregarTarefas();
  }

  get tarefasFiltradas(): Tarefa[] {
    switch (this.filtro) {
      case 'pendentes':
        return this.tarefas.filter(t => !t.concluida);
      case 'concluidas':
        return this.tarefas.filter(t => t.concluida);
      default:
        return this.tarefas;
    }
  }

  get totalPendentes(): number {
    return this.tarefas.filter(t => !t.concluida).length;
  }

  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }
}
