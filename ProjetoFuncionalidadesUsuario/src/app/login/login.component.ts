import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { on } from 'events';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuarios: Usuario[] = [
    {
      nome: 'Tadeu',
      senha: '123',
      email: 'Tadeu@gmail.com'
    },
    {
      nome: 'HermelinaLinda',
      senha: '1234',
      email: 'hermebonita@gmail.com'
    }
  ]; 

  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder){
    this.formularioLogin = this.fb.group({
      campoUsuario: ['', [Validators.required]],
      campoSenha: ['', [Validators.required]]
    });
  }

  Enviar(){
    let nomeUsuarioEmailHtml = this.formularioLogin.get("campoUsuario")?.value
    let senhaHtml = this.formularioLogin.get("campoSenha")?.value


    const usuarioLogin = new Usuario(nomeUsuarioEmailHtml, senhaHtml, 'Tadeu@gmail.com');

    if(this.usuarios.find(u => (u.nome == usuarioLogin.nome || usuarioLogin.nome == u.email) && u.senha == usuarioLogin.senha)){
      alert("Usuario Encontrado!! :)");
    }
    else{
      alert("Usuario não encontrado  :(");
      this.formularioLogin.get("campoUsuario")?.setValue('')
      this.formularioLogin.get("campoSenha")?.setValue('')
    }
  }
}
