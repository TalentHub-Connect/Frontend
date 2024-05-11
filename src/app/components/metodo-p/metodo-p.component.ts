import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/model/auth/user';

@Component({
  selector: 'app-metodo-p',
  templateUrl: './metodo-p.component.html',
  styleUrls: ['./metodo-p.component.css']
})
export class MetodoPComponent {
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  user: User = new User();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'] || '';
      this.apellido = params['apellido'] || '';
      this.email = params['email'] || '';
    });
  }

  psePayment() {
    window.location.replace("https://www.pse.com.co/persona");
  }

  visaPayment() {
    const url = '/visa?nombre=' + encodeURIComponent(this.nombre) +
                '&apellido=' + encodeURIComponent(this.apellido) +
                '&email=' + encodeURIComponent(this.email);
    this.router.navigateByUrl(url);
  }
}
