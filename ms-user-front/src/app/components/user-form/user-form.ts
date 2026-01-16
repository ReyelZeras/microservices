import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon'; // IMPORTANTE
import { Router } from '@angular/router';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule // ADICIONADO AQUI
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserFormComponent implements OnInit {
  userData = { name: '', email: '' };
  userId: string | null = null;
  isEditMode = false;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    const state = window.history.state;
    if (state && state.data) {
      this.isEditMode = true;
      this.userId = state.data.userID;
      this.userData = { name: state.data.name, email: state.data.email };
    }
  }

  onSubmit() {
    if (this.isEditMode && this.userId) {
      this.userService.update(this.userId, this.userData).subscribe({
        next: () => {
          this.showNotice('Usuário atualizado com sucesso!');
          this.router.navigate(['/listar']);
        },
        error: () => this.showNotice('Erro ao atualizar.')
      });
    } else {
      this.userService.save(this.userData).subscribe({
        next: () => {
          this.showNotice('Usuário cadastrado com sucesso!');
          this.userData = { name: '', email: '' };
        },
        error: () => this.showNotice('Erro ao cadastrar.')
      });
    }
  }

  private showNotice(msg: string) {
    this.snackBar.open(msg, 'Fechar', { duration: 3000, verticalPosition: 'top' });
  }
}
