import { Injectable } from '@angular/core';
import { Usuario } from './model/Usuario';


@Injectable({
  providedIn: 'root'
})
export class CompartilhamentoService {

private usuarios: Usuario[] = [
      {
      nome: 'tadeu',
      senha: '123',
      email: 'Tadeu@gmail.com'
    },
    {
      nome: 'hermelinalinda',
      senha: '1234',
      email: 'hermebonita@gmail.com'
    }

];

  constructor() { }

  setUsuarios(novausuario: Usuario) {
    this.usuarios.push(novausuario)
  }

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }
}
