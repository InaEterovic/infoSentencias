import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

sentencias: []
textoIngresado:''


  constructor() {

   }

  ngOnInit() {
  }

  buscar(ingresado){
    this.textoIngresado = ingresado
  }

}
