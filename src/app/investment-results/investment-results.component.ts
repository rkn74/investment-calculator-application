import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
  standalone:false,
})
export class InvestmentResultsComponent {
  constructor(private investmentService:InvestmentService){

  }

  get results(){
    return this.investmentService.resultData;
  }

  // @Input() results?:{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment:number,
  //   totalInterest: number,
  //   totalAmounInvested: number,
  
  // }[];
   
}
