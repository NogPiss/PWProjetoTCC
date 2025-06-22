import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompartilhamentoService } from '../compartilhamento.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-deletar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './deletar.component.html',
  styleUrl: './deletar.component.css'
})
export class DeletarComponent {

  formDeletar: FormGroup;

  constructor(private fb: FormBuilder){
    this.formDeletar = this.fb.group({
      campoNomeEmail: ['', [Validators.required]],
      campoSenha: ['', [Validators.required]]
    });
  }

  deletar(){
    
  }
}
