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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AvatarIconComponent,
    CardComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
