import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit {
  tarefa = {
    titulo: '',
    descricao: '',
    concluida: false,
    dataCriacao: new Date()
  };

  tarefaId: number | null = null;
  modoEdicao = false;

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.tarefaId = +id;
        this.modoEdicao = true;
        this.carregarTarefa(this.tarefaId);
      }
    });
  }

  carregarTarefa(id: number): void {
    const tarefaExistente = this.tarefaService.buscarPorId(id);
    if (tarefaExistente) {
      this.tarefa = { ...tarefaExistente };
    } else {
      alert('Tarefa não encontrada!');
      this.router.navigate(['/tarefas']);
    }
  }

  salvar(): void {
    if (!this.tarefa.titulo.trim()) {
      alert('O título é obrigatório!');
      return;
    }

    if (this.modoEdicao && this.tarefaId) {
      this.tarefaService.atualizar(this.tarefaId, this.tarefa);
    } else {
      this.tarefaService.adicionar(this.tarefa);
    }

    this.router.navigate(['/tarefas']);
  }

  cancelar(): void {
    this.router.navigate(['/tarefas']);
  }
}
