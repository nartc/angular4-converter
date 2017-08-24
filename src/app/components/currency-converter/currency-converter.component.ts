import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  public usdInput: number = 0;
  public vndOutput: number = 0;
  public eurOutput: number = 0;
  public usdToVnd: number;
  public usdToEur: number;

  constructor(public http: Http) {
    this.http.get('http://api.fixer.io/latest?base=USD')
      .map(res => res.json())
      .subscribe(
        (data: any): void =>{
          console.log(data);
          this.usdToEur = data.rates.EUR;
          this.usdToVnd = data.rates.CZK * 1026.602231154871;
        }
      )
   }

  ngOnInit() {
    
  }

  onChange(e: any): void {
    if(e != null) {
      this.usdInput = e;
    } else {
      this.usdInput = 0;
    }

    this.vndOutput = this.usdInput * this.usdToVnd;
    this.eurOutput = this.usdInput * this.usdToEur;
  }

}
