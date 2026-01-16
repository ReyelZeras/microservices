import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // IMPORTANTE
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule, // ADICIONADO AQUI
    MatSnackBarModule
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'actions'];

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.listAll().subscribe({
      next: (data) => {
        this.users = data;
        this.cdr.detectChanges();
      },
      error: () => this.showNotice('Erro ao carregar lista.')
    });
  }

  editUser(user: any): void {
    this.router.navigate(['/editar'], { state: { data: user } });
  }

  deleteUser(id: string): void {
    if (id && confirm('Deseja realmente excluir?')) {
      this.userService.delete(id).subscribe({
        next: () => {
          this.showNotice('Usuário removido!');
          this.loadUsers();
        },
        error: () => this.showNotice('Erro ao deletar.')
      });
    }
  }

  private showNotice(msg: string) {
    this.snackBar.open(msg, 'Fechar', { duration: 3000, verticalPosition: 'top' });
  }
}
