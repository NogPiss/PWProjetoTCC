import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { CadastroComponent } from "../cadastro/cadastro.component";

@Component({
  selector: 'app-funcionalidade',
  standalone: true,
  imports: [LoginComponent, CadastroComponent],
  templateUrl: './funcionalidade.component.html',
  styleUrl: './funcionalidade.component.css'
})
export class FuncionalidadeComponent {

}
