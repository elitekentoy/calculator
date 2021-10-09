import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() operator = '';
  @Output() operatorChosen = new EventEmitter<String> ();

  setOperator(){
    this.operatorChosen.emit(this.operator);
  }


}
