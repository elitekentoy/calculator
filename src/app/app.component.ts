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

  getFirstNumber(){
    return this.firstNumber;
  }
  getSecondNumber(){
    return this.secondNumber;
  }
  getOperator(){
    return this.operatorChosen;
  }

  changeUI(){
    if(this.currentTheme === 'Light')
      this.currentTheme = 'Dark';
    else 
      this.currentTheme = 'Light';
  }

}
