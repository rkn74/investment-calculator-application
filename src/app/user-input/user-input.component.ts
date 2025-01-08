import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';


export interface UserInputValues{
  intialInvestMent:string,
  anualInvestment:string,
  expectedReturn:string,
  duration:string,
}


@Component({
  selector: 'app-user-input',
  standalone:false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})

export class UserInputComponent {

 

  //@Output() calculate = new EventEmitter<InvestmentInput>();
  enteredIntialInvestMent = '0';
  enteredAnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  constructor(private investmentService:InvestmentService){

  }

  onSubmit(){ 
    this.investmentService.onCalculateInvestmentResults({intialInvestMent: +this.enteredIntialInvestMent,
           duration: +this.enteredDuration,
           expectedReturn: +this.enteredExpectedReturn,
           anualInvestment: +this.enteredAnualInvestment});
  //   this.calculate.emit(
  //     {
  //      intialInvestMent: +this.enteredIntialInvestMent,
  //      duration: +this.enteredDuration,
  //      expectedReturn: +this.enteredExpectedReturn,
  //      anualInvestment: +this.enteredAnualInvestment

  //     }
  //   );
    
   }

}
