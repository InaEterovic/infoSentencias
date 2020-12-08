import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-sentencia',
  templateUrl: './modal-sentencia.component.html',
  styleUrls: ['./modal-sentencia.component.css']
})
export class ModalSentenciaComponent implements OnInit {
  @Input()
  public sentencia: string;
  @Output()
  public closedWasClicked: EventEmitter<boolean>;

  constructor() { 
    this.closedWasClicked = new EventEmitter();
  }
  

  ngOnInit(): void {
  }

  public cerrar(){
    this.closedWasClicked.emit(true)
  }


}
