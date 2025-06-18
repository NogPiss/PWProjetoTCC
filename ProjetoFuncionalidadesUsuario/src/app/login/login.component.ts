import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { on } from 'events';
import { CompartilhamentoService } from '../compartilhamento.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuarios: Usuario[] = [];

  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder, private compartilhamentoService: CompartilhamentoService){
    this.formularioLogin = this.fb.group({
      campoUsuario: ['', [Validators.required]],
      campoSenha: ['', [Validators.required]]
    });
  }

  ngOnInit(){
    this.usuarios = this.compartilhamentoService.getUsuarios();
  }

  Enviar(){
    let nomeUsuarioEmailHtml = this.formularioLogin.get("campoUsuario")?.value
    let senhaHtml = this.formularioLogin.get("campoSenha")?.value


    const usuarioLogin = new Usuario(nomeUsuarioEmailHtml, senhaHtml, '');


    if(this.usuarios.find(u => (u.nome == usuarioLogin.nome || usuarioLogin.nome == u.email) && u.senha == usuarioLogin.senha)){
      alert("Usuario encontrado!! \nBem-vindo " + this.usuarios.find(u => (u.nome == usuarioLogin.nome || usuarioLogin.nome == u.email) && u.senha == usuarioLogin.senha)?.nome);
      
    }
    else{
      alert("Usuario não encontrado  :(");
      this.formularioLogin.get("campoUsuario")?.setValue('')
      this.formularioLogin.get("campoSenha")?.setValue('')
    }
  }
}
