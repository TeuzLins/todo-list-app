import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TarefasListaComponent } from './components/tarefas-lista/tarefas-lista.component';
import { TarefaFormComponent } from './components/tarefa-form/tarefa-form.component';

export const routes: Routes = [
  // Rota padrão - redireciona para home
  { 
    path: '', 
    component: HomeComponent, 
    title: 'Home - Sistema de Tarefas' 
  },
  
  // Rota para listagem de tarefas
  { 
    path: 'tarefas', 
    component: TarefasListaComponent, 
    title: 'Minhas Tarefas' 
  },
  
  // Rota para nova tarefa (DEVE vir antes da rota com :id)
  { 
    path: 'tarefas/nova', 
    component: TarefaFormComponent, 
    title: 'Nova Tarefa' 
  },
  
  // Rota para edição com parâmetro
  { 
    path: 'tarefas/:id/editar', 
    component: TarefaFormComponent, 
    title: 'Editar Tarefa' 
  },
  
  // Rota 404 - qualquer URL não encontrada
  { 
    path: '**', 
    redirectTo: '' 
  } 
];
