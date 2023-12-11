import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})

export class MapaComponent implements OnInit {
  coletasPendentes: ColetaModel[];
  numeroItens: number;

  constructor(private readonly coletaService: ColetaService) {}

  ngOnInit() {
    this.GetColetasPendentes(this.numeroItens).subscribe((coletasPendentes) => {
      this.coletasPendentes = coletasPendentes;
    });
  }

  GetColetasPendentes(numeroItens: number): Promise<ColetaModel[]> {
    const url = `/api/coletas/pendentes?numeroItens=${numeroItens}`;
    return this.coletaService.get<ColetaModel[]>(url);
  }
}