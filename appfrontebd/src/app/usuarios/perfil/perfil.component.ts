import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('loggedIn') == 'true';
  }

  logout(): void {
    sessionStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
}
