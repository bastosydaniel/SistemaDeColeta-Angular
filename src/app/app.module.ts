import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AvatarIconComponent } from './modules/planejamento-gestao/dashboard-descartador/componentes/avatar-icon/avatar-icon.component';
import { MapaComponent } from './modules/planejamento-gestao/dashboard-descartador/componentes/mapa/mapa.component';
import { SidenavComponent } from './modules/planejamento-gestao/dashboard-descartador/componentes/sidenav/sidenav.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,   
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    AvatarIconComponent,
    MapaComponent,
    SidenavComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
