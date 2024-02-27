import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ParelinofuComponent } from './parelinofu/parelinofu.component';
import { MurcielagoComponent } from './murcielago/murcielago.component';
import { ScoutdeargComponent } from './scoutdearg/scoutdearg.component';
import { MorseComponent } from './morse/morse.component';
import { CrucesComponent } from './cruces/cruces.component';
import { RejillaComponent } from './rejilla/rejilla.component';
import { FooterComponent } from './footer/footer.component';
import { BanderaComponent } from './bandera/bandera.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AppRoutingModule } from './app-routing.module';
import { EnvComponent } from './env/env.component';
import { GenerateComponent } from './generate/generate.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EntradaComponent,
    ParelinofuComponent,
    MurcielagoComponent,
    ScoutdeargComponent,
    MorseComponent,
    CrucesComponent,
    RejillaComponent,
    FooterComponent,
    BanderaComponent,
    AyudaComponent,
    EnvComponent,
    GenerateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  

 }
