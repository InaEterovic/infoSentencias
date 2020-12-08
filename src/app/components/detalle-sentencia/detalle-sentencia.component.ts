import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SentenciasService } from './../../services/sentencia.service';



@Component({
  selector: 'app-detalle-sentencia',
  templateUrl: './detalle-sentencia.component.html',
  styleUrls: ['./detalle-sentencia.component.css']
})
export class DetalleSentenciaComponent implements OnInit {

  sentenceId: string;
  sentencia;
  modalActivo: boolean;

  constructor(private _Activatedroute:ActivatedRoute,private sentenciasService: SentenciasService) {
    this.modalActivo = false;
   }

  ngOnInit(): void {
    this.sentenceId = this._Activatedroute.snapshot.paramMap.get("id");
    this.sentenciasService.getSentenceById(this.sentenceId).subscribe((data) => { 
      this.sentencia= data
    })
  }
  mostrarSentencia(){
    this.modalActivo =  true;
  }

  public cerrar(){
    this.modalActivo =  false;
  }

}
