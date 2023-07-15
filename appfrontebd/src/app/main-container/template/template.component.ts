import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
      this.router.navigate(['/login']);
    }
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('loggedIn') == 'true';
  }

  logout(): void {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('formData');
    this.router.navigate(['/login']);
  }

}
