import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PosibleUsuario } from 'src/app/model/Entities/posibleUsuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-f-pago',
  templateUrl: './f-pago.component.html',
  styleUrls: ['./f-pago.component.css']
})
export class FPagoComponent {
  posibleUsuario: PosibleUsuario = new PosibleUsuario();
  

  constructor(private http: HttpClient, private router: Router) { }
  confirmar() {
    this.router.navigate(['/metodo'], { queryParams: { nombre: this.posibleUsuario.nombre, apellido: this.posibleUsuario.apellido, email: this.posibleUsuario.email } });
  }
  


  
}
