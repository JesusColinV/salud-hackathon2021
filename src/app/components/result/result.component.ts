import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  bmi : number;
  myresult: string;
  myinterpretation: string;

  constructor(private route:ActivatedRoute) {
    this.myresult=''
    this.myinterpretation=''
    this.bmi = +route.snapshot.paramMap.get('value')! ;
   }

  ngOnInit(): void {
    this.getResult()
  }

  getResult(){
    
    if(this.bmi >= 25){
      this.myresult='overweight'
      this.myinterpretation='try to exercise more and control your diet'
    }else if(this.bmi >=18.5){
      this.myresult='healthy'
      this.myinterpretation='Congratulations, you are fine'

    }else {
      this.myresult='malnutrition'
      this.myinterpretation='you need to eat better'
    }

  }

}
