import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  loginSwitchCase='red';
  private colorSource = new BehaviorSubject<string>('red');
  currentColor = this.colorSource.asObservable();
  constructor() { }
  changeColor(color: string) {
    this.colorSource.next(color);
  }
}
