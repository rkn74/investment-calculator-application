import { Injectable } from "@angular/core";
import type { InvestmentInput } from "./investment.model";


@Injectable({providedIn:'root'})
export class InvestmentService{
    resultData!:{
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment:number;
        totalInterest: number;
        totalAmounInvested: number;
      
      }[];
      
    onCalculateInvestmentResults(
        data: InvestmentInput
      ) {
        const {intialInvestMent,duration,expectedReturn,anualInvestment} = data;
        const anualData = [];
        let investmentValue = intialInvestMent;
        for(let i=0;i<duration;i++){
          const year = i+1;
          const interestEarnedInYear = investmentValue*(expectedReturn/100);
          investmentValue+= interestEarnedInYear+anualInvestment;
          const totalInterest = investmentValue - anualInvestment*year - intialInvestMent;
          anualData.push({
            year:year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: anualInvestment,
            totalInterest:totalInterest,
            totalAmounInvested: intialInvestMent+anualInvestment*year,
          })
        
      }
      console.log(anualData);
      this.resultData = anualData;
      
    }
}