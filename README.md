# Todo App

Este é um aplicativo de lista de tarefas desenvolvido com Angular.

## Pré-requisitos

Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

-   **Node.js**: Recomenda-se a versão LTS. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).
-   **Angular CLI**: Instale-o globalmente usando npm:
    ```bash
    npm install -g @angular/cli
    ```

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### 1. Instalar Dependências

Navegue até o diretório do projeto (`todo-app`) e instale as dependências:

```bash
cd todo-app
npm install
```

### 2. Executar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
ng serve
```

O aplicativo estará disponível em `http://localhost:4200/`. Ele será recarregado automaticamente se você fizer alguma alteração nos arquivos fonte.

### 3. Build para Produção (Opcional)

Para criar um build otimizado para produção, execute:

```bash
ng build
```

Os arquivos gerados estarão no diretório `dist/todo-app/browser/`.

Para servir o build de produção localmente, você pode usar um servidor HTTP simples:

```bash
npm install -g http-server
cd dist/todo-app/browser
http-server
```

## Estrutura do Projeto

```
todo-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   ├── navbar/
│   │   │   ├── tarefas-lista/
│   │   │   └── tarefa-form/
│   │   ├── models/
│   │   ├── services/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── styles.css
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

## Conceitos Demonstrados

Este projeto demonstra os seguintes conceitos do Angular:

-   **Componentes e Métodos**: `TarefasListaComponent`, `TarefaFormComponent`.
-   **Templates**: Uso de `*ngIf`, `*ngFor`, interpolação `{{ }}`, pipes `date` e `currency`.
-   **Data Binding**: `Property Binding` (`[class.concluida]`, `[disabled]`, `[routerLink]`), `Event Binding` (`(click)`, `(change)`, `(ngSubmit)`), `Two-Way Binding` (`[(ngModel)]`).
-   **Roteamento**: Configuração em `app.routes.ts`, parâmetros de rota, navegação programática e declarativa.
