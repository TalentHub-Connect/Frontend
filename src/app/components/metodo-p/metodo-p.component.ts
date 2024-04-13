import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-metodo-p',
  templateUrl: './metodo-p.component.html',
  styleUrls: ['./metodo-p.component.css']
})
export class MetodoPComponent {
  constructor(private router: Router) { }

  redirectToRoute() {
    // Redirige a la ruta deseada cuando se hace clic en el elemento
    this.router.navigateByUrl('/visa');
  }
}
