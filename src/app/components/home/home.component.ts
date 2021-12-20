import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  age = 25;
  weight = 60
  height = 170
  selected = 'None';

  ngOnInit(): void {
  }

  uploadHeight(event:any): void{
    // console.log(event.target.value);
    this.height = event.target.value
  }

  selecteduploadM(){
    this.selected = 'Male'
  }

  selecteduploadF(){
    this.selected = 'Female'
  }

  calculateBMI():void{
    const BMI = this.weight/Math.pow(this.height/100,2)
    console.log(BMI.toFixed(1))
    this.router.navigate(['/result',BMI.toFixed(1)])
  }
}
