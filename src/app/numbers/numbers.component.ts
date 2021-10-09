import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() order = '';
  @Output() inputNumbers = new EventEmitter<String> ();

  theNumber = '';

  setNumbers(value: String){
    this.theNumber = value.toString();
    this.emitTheNumbers(this.theNumber);
  }

  emitTheNumbers(value: String){
    this.inputNumbers.emit(value);
  }


}
