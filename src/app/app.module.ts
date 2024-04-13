import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Landing1Component } from './components/landing1/landing1.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { PaymentComponent } from './components/payment/payment.component';
import {HttpClientModule} from "@angular/common/http";
import { MetodoPComponent } from './components/metodo-p/metodo-p.component';
import { TarjetaVisaComponent } from './components/tarjeta-visa/tarjeta-visa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Landing1Component,
    FooterComponent,
    Navbar2Component,
    Footer2Component,
    PaymentComponent,
    MetodoPComponent,
    TarjetaVisaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
