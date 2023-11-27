import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './dashboard-descartador/sidebar/sidebar.component';
import { AvatarIconComponent } from './dashboard-descartador/avatar-icon/avatar-icon.component';
import { CardComponent } from './dashboard-descartador/card/card.component';
import { BadgeComponent } from './dashboard-descartador/badge/badge.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { Card2Component } from './dashboard-descartador/card2/card2.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AvatarIconComponent,
    CardComponent,
    BadgeComponent,
    Card2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
