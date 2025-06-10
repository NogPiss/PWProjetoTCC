import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
    let nomeUsuarioHtml = this.formularioLogin.get("campoUsuario")?.value
    let senhaHtml = this.formularioLogin.get("campoSenha")?.value

    if(nomeUsuarioHtml == this.nomeOficial && senhaHtml == this.senhaOficial){
      alert("Usuario entrou :)");
    }
    else{
      alert("algo está errado :(");
    }
  }
}
