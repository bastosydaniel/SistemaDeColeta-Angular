import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardDescartadorComponent } from './modules/planejamento-gestao/dashboard-descartador/dashboard-descartador.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardDescartadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
