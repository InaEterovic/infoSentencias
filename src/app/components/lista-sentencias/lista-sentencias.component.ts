import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SentenciasService } from './../../services/sentencia.service';

@Component({
  selector: 'app-lista-sentencias',
  templateUrl: './lista-sentencias.component.html',
  styleUrls: ['./lista-sentencias.component.css']
})
export class ListaSentenciasComponent implements OnInit {
  texto:string
  sentencias:[]

  constructor(private _Activatedroute:ActivatedRoute,private sentenciasService: SentenciasService) { }

  ngOnInit(): void {
    this.texto=this._Activatedroute.snapshot.paramMap.get("texto");
    this.sentenciasService.queryWord(this.texto).subscribe((data) => { 
       this.sentencias= data
       console.log(this.sentencias)
     })

  }

}
