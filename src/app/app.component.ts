import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculator';
  operatorChosen = '';
  firstNumber = 0;
  secondNumber = 0;
  currentTheme = 'Dark';

  numberOrder = [
    {
      order: 'First',
    },
    {
      order: 'Second',
    },
  ];

  operator = [
    {
      op: '+',
    },
    {
      op: '-',
    },
    {
      op: '*',
    },
    {
      op: '/',
    },
  ];

  setOperatorChosen(value: string) {
    this.operatorChosen = value;
  }

  setTheFirstNumber(value: string) {
    this.firstNumber = Number(value);
  }

  setTheSecondNumber(value: string) {
    this.secondNumber = Number(value);
  }

  calculate(a: Number, b: Number) {
    switch (this.operatorChosen) {
      case '*':
        return Number(a) * Number(b);
        break;

      case '+':
        return Number(a) + Number(b);
        break;

      case '-':
        return Number(a) - Number(b);
        break;

      case '/':
        return Number(a) / Number(b);
        break;
      default:
        return 6;
        break;
    }
  }

  changeUI(){
    if(this.currentTheme === 'Light')
      this.currentTheme = 'Dark';
    else 
      this.currentTheme = 'Light';
  }

}
