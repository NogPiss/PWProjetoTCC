import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  formularioCadastro: FormGroup;

  constructor(private fb: FormBuilder){
    this.formularioCadastro = this.fb.group({
      campoNomeUsuario: ['', [Validators.required, Validators.maxLength(8)]],
      camposenhaUsuario: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      campoEmail: ['', [Validators.required, Validators.email]]
    });
  }

  Cadastrar(){
    let nomeCadastro = this.formularioCadastro.get("campoNomeUsuario")?.value
    let SenhaCadastro = this.formularioCadastro.get("camposenhaUsuario")?.value
    let emailCadastro = this.formularioCadastro.get("campoEmail")?.value
  }
}
