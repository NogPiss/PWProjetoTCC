import { Injectable } from '@angular/core';
import { Usuario } from './model/Usuario';


@Injectable({
  providedIn: 'root'
})
export class CompartilhamentoService {

private usuarios: Usuario[] = [];

  constructor() { }

  setUsuarios(novausuarios: any[]) {
  this.usuarios = novausuarios;
  }

  getusarios(): any[] {
    return this.usuarios;
  }
}
