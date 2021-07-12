import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {translateFiles} from '@angular/localize/src/tools/src/translate/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 's2q1';
  num = new FormControl('');
  result: boolean;
  fList: any = ['isPrime', 'isFibonacci'];
  fChoice = new FormControl('', Validators.required);
  isPrime(n){
    if (n <= 1)
      return false;
    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
      if (n % i === 0)
        return false;
    return true;
  }
  isPerfectSquare(x) {
    const s = Math.sqrt(x);
    return (s * s === x);
  }
// Returns true if n is a Fibonacci Number, else false
  isFibonacci(n) {
      // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
      // is a perfect square
    return (this.isPerfectSquare((5 * (n ** 2) + 4) || this.isPerfectSquare((5 * (n ** 2)) - 4)));
  }

  selected(e) {
    console.log(e.target.value);
    if (this.fChoice.value === 'isPrime'){
      this.result = this.isPrime(this.num.value);
    }
    else if (this.fChoice.value === 'isFibonacci') {
      this.result = this.isFibonacci(this.num.value);
    }
  }
}
