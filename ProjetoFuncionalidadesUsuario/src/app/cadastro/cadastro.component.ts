import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { validateHeaderName } from 'http';
import { Usuario } from '../model/Usuario';
import { CompartilhamentoService } from '../compartilhamento.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  usuariosRecebido: Usuario[] = [];


  formularioCadastro: FormGroup;

  constructor(private fb: FormBuilder, private compartilhamentoService: CompartilhamentoService){
    this.formularioCadastro = this.fb.group({
      campoNomeUsuario: ['', [Validators.required, Validators.maxLength(10)]],
      camposenhaUsuario: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]],
      campoEmail: ['', [Validators.required, Validators.email]],
      campoconfirmasenhaUsuario: ['', [Validators.required]]
    });
  }

  ngOnInit(){
    this.usuariosRecebido = this.compartilhamentoService.getusarios();
  }

  mesmaSenhaValidator: ValidatorFn = (formGroup: AbstractControl) : ValidationErrors | null => {
    let senha = formGroup.get("camposenhaUsuario")?.value
    let confirmaSenha = formGroup.get("camposenhaUsuario")?.get("campoconfirmasenhaUsuario")?.value

    if (senha == confirmaSenha){
      return{senhasDiferentes: true}
    }
    return null;
  }

  Cadastrar(){
    let nomeCadastro = this.formularioCadastro.get("campoNomeUsuario")?.value;
    let SenhaCadastro = this.formularioCadastro.get("camposenhaUsuario")?.value;
    let emailCadastro = this.formularioCadastro.get("campoEmail")?.value;
    let confirmaSenha = this.formularioCadastro.get("campoconfirmasenhaUsuario")?.value;

    const usuarioCadastro = new Usuario(nomeCadastro, SenhaCadastro, emailCadastro);

    if(this.formularioCadastro.valid){
      /* Cadastro do usuario colocando na lista */

      alert("Usuario cadastrado")
    }
  }
}
