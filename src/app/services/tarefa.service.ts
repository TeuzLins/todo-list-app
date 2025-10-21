import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Estudar Angular',
      descricao: 'Aprender componentes standalone',
      concluida: false,
      dataCriacao: new Date('2025-01-15')
    },
    {
      id: 2,
      titulo: 'Fazer exercícios',
      descricao: 'Praticar roteamento e data binding',
      concluida: true,
      dataCriacao: new Date('2025-01-16')
    },
    {
      id: 3,
      titulo: 'Revisar templates',
      descricao: 'Estudar diretivas e pipes',
      concluida: false,
      dataCriacao: new Date('2025-01-17')
    }
  ];

  private proximoId = 4;

  constructor() { }

  listarTodas(): Tarefa[] {
    return this.tarefas;
  }

  buscarPorId(id: number): Tarefa | undefined {
    return this.tarefas.find(t => t.id === id);
  }

  adicionar(tarefa: Omit<Tarefa, 'id'>): void {
    const novaTarefa: Tarefa = {
      ...tarefa,
      id: this.proximoId++
    };
    this.tarefas.push(novaTarefa);
  }

  atualizar(id: number, tarefaAtualizada: Partial<Tarefa>): void {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tarefas[index] = {
        ...this.tarefas[index],
        ...tarefaAtualizada
      };
    }
  }

  excluir(id: number): void {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
  }

  alternarConclusao(id: number): void {
    const tarefa = this.buscarPorId(id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }
}
