import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class Usuario {
    id: number;
    nome: string;
    senha: string;
    cpf: string;
    cnpj: string;
    foto: Blob;
    email: string;
    telefone: string;
    status: number;

    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public senha: string,
        public cpf: string,
        public cnpj: string,
        public telefone: string,
        public status: string,
      ) {}

  }