import { Component } from '@angular/core';


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
  constructor(){}
  ngOnInit(): void {}
  switchToReg(){
    this.displayProgressBar=true
    setTimeout(() => {
      console.log("Submit clicked");
      this.displayProgressBar=false
      this.color='blue'

    }, 500);

  }
  switchToLog(){
    this.displayProgressBar=true
    setTimeout(() => {
      console.log("Submit clicked");
      this.displayProgressBar=false
      this.color='red'

    }, 500);

  }
}
