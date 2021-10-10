import { Component, OnInit, Input , OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() fNumber = 0;
  @Input() sNumber = 0;
  @Input() operator = '';
  result = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.calculate(this.fNumber, this.sNumber, this.operator);

  }

  calculate(a: Number, b: Number, c: String){
    switch(c){
      case '*': this.result = Number(a) * Number(b);break;
      case '+': this.result = Number(a) + Number(b);break;
      case '-': this.result = Number(a) - Number(b);break;
      case '/': this.result = Number(a) / Number(b);break;
      default: this.result = 0;break;
    }
  }




}
