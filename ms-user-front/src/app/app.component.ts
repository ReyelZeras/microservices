import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z8">
      <span>Sistema de Usuários</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/cadastrar">NOVO CADASTRO</button>
      <button mat-button routerLink="/listar">LISTAR TODOS</button>
    </mat-toolbar>

    <div class="main-container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
