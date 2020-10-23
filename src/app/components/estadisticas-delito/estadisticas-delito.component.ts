import { Component, OnInit } from '@angular/core';

import { DELITOS } from './../../constants/delitos';

@Component({
  selector: 'app-estadisticas-delito',
  templateUrl: './estadisticas-delito.component.html',
  styleUrls: ['./estadisticas-delito.component.css']
})

export class EstadisticasDelitoComponent implements OnInit {
  
   delitos = DELITOS;
   seleccionado='';
   
   
  constructor() { }

  ngOnInit() {
  }

  delitoSeleccionado(seleccionado){
    console.log(seleccionado)
    console.log(this.seleccionado)
  }


}
