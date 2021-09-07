import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input() message: string // dois pontos : define o tipo da variável
  @Input() tipo: string = 'success' // igual atribui um valor apara essa variável


  constructor(
    public modal: BsModalRef    
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.modal.hide()
  }

}
