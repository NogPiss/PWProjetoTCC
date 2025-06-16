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
    }
  ]; 

  nomeOficial: string = "Tadeu";
  senhaOficial:string = "123";
  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder){
    this.formularioLogin = this.fb.group({
      campoUsuario: ['', [Validators.required, Validators.pattern("Tadeu")]],
      campoSenha: ['', [Validators.required, Validators.pattern("123")]]
    });
  }

  Enviar(){
    let nomeUsuarioEmailHtml = this.formularioLogin.get("campoUsuario")?.value
    let senhaHtml = this.formularioLogin.get("campoSenha")?.value
/*
    if(nomeUsuarioEmailHtml == this.nomeOficial && senhaHtml == this.senhaOficial){
      alert("Usuario entrou :)");
    }
    else if(nomeUsuarioEmailHtml != this.nomeOficial){
      alert("O nome de usuario está errado :(");
    }
    else if(senhaHtml != this.senhaOficial){
      alert("A senha está errada :(");
    }
*/
    for(){

    }
  }
}
