import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FPagoComponent } from './components/f-pago/f-pago.component';
import { Landing1Component } from './components/landing1/landing1.component';
import { MetodoPComponent } from './components/metodo-p/metodo-p.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TarjetaVisaComponent } from './components/tarjeta-visa/tarjeta-visa.component';


const routes: Routes = [
  { path: '', component: Landing1Component },
  { path: 'planes', component: PaymentComponent },
  { path: 'metodo', component: MetodoPComponent },
  { path: 'visa', component: TarjetaVisaComponent },
  {path: 'forms-pago', component: FPagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
