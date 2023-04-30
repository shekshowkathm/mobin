import { Component } from '@angular/core';
import { RegisterService } from '../service/register.service';


interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  foods: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'others', viewValue: 'Others'},
  ];

  public color='red';
  displayProgressBar=false;
  currentColor: string = 'red';
  constructor(private registerService:RegisterService){}
  ngOnInit(): void {
    this.registerService.currentColor.subscribe((color:any)=>{
      this.currentColor = color
    })
  }
  switchToReg(){
    this.displayProgressBar=true
    setTimeout(() => {
      console.log("Submit clicked");
      this.displayProgressBar=false
      this.currentColor='blue'
      this.color='blue'

    }, 500);

  }
  switchToLog(){
    this.displayProgressBar=true
    setTimeout(() => {
      console.log("Submit clicked");
      this.displayProgressBar=false
      this.currentColor='red'
      this.color='red'

    }, 500);

  }
}
