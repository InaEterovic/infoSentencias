import { Component, OnInit } from '@angular/core';

import { DELITOS } from './../../constants/delitos';
import { DelitosService } from './../../services/delitos.service';

export interface delito{
  name: string,
  wordNetwork: string
}

@Component({
  selector: 'app-estadisticas-delito',
  templateUrl: './estadisticas-delito.component.html',
  styleUrls: ['./estadisticas-delito.component.css']
})

export class EstadisticasDelitoComponent implements OnInit {
  
   lista_delitos = DELITOS;
   seleccionado='';
   delito
   
   
   
  constructor(private delitosService: DelitosService) { }

  ngOnInit() {
  }

  delitoSeleccionado(seleccionado){
    this.delitosService.getByDelito(seleccionado).subscribe((data) => { 
      this.delito = data; })
  }


}
