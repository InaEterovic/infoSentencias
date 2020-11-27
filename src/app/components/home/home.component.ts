import { Component, OnInit } from '@angular/core';
import { SentenciasService } from './../../services/sentencia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

sentencias: []

  constructor(private sentenciasService: SentenciasService) {

   }

  ngOnInit() {
  }
 
  buscar(texto){
    this.sentenciasService.queryWord(texto).subscribe((data) => { 
      //this.sentencias = data; 
      console.log(data)
    })
  }

}
