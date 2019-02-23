import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {
  pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
  usuario: Object = {
    nombre: null,
    apellidos: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    accept: false
  }

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  }
  ]

  sexos: string[] = ["Hombre", "Mujer", "Sin definir"];

  constructor() {
    this.usuario;
  }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("Form posteado");
    console.log(forma);
    console.log("ngForm", forma);
    console.log("valor Forma", forma.value);

    console.log("Usuario", this.usuario);


  }
}
