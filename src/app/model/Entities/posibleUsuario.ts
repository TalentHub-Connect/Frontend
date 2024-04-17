import { Card } from './card'; 

export class PosibleUsuario {
  public nombre: string = '';
  public apellido: string = '';
  public email: string = '';
  public tarjeta: Card = new Card();

  constructor();
  constructor(nombre: string, apellido: string, email: string, tarjeta: Card);
  constructor(nombre?: string, apellido?: string, email?: string, tarjeta?: Card) {
    if (nombre) this.nombre = nombre;
    if (apellido) this.apellido = apellido;
    if (email) this.email = email;
    if (tarjeta) this.tarjeta = tarjeta;
  }
}
