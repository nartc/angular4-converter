import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  public fInput: number;
  public sInput: number;

  public units: Array<Object> = 
                [
                  {
                    code: '',
                    name: ''
                  }
                ]
  
  public selectedFirstUnit: string = '';
  public selectedSecondUnit: string = '';
  public changedFirstInput: boolean;
  public changedSecondInput: boolean;

  public pickedFirst: boolean = false;
  public placeHolder: string = '';
  
  public usdToVnd: number;
  public usdToEur: number;

  public eurToVnd: number;
  public eurToUsd: number;

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
    this.http.get('http://api.fixer.io/latest?base=EUR')
      .map(res => res.json())
      .subscribe(
        (data: any): void =>{
          console.log(data);
          this.eurToVnd = data.rates.CZK * 1.028048126293203;
          this.eurToUsd = data.rates.USD;
        }
      )

    this.units = 
    [
      {
        code: 'USD',
        name: 'USA Dollars'
      },
      {
        code: 'VND',
        name: 'Vietnam Dong'
      },
      {
        code: 'EUR',
        name: 'Pound'
      }
    ]
  
      this.placeHolder = 'Please pick the first unit'
   }

  ngOnInit() {
    
  }

  on1stChange(e: any): void {
    this.fInput = e;
    
    this.changedFirstInput = true;
    this.changedSecondInput = false;
    this.exchange();
    
  }

  on2ndChange(e: any): void {
    this.sInput = e;

    this.changedSecondInput = true;
    this.changedFirstInput = false;
    this.exchange();
  }

  onFirstUnitChange(e: any): void {
    this.selectedFirstUnit = e.value;
    this.pickedFirst = true;
    this.placeHolder = 'Unit';
    this.exchange();
  }

  onSecondUnitChange(e: any): void {
    this.selectedSecondUnit = e.value;
    this.exchange();
  }

  exchange() {
    //USD Exchange
    if(this.selectedFirstUnit == 'USD') {
      if(this.selectedSecondUnit == 'VND') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*this.usdToVnd;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/this.usdToVnd;
        }
        
      } else if(this.selectedSecondUnit == 'EUR') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*this.usdToEur;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/this.usdToEur;
        }
        
      } else if(this.selectedSecondUnit == 'USD') {
        this.sInput = this.fInput;
      }
    } 
    //EUR Exchange
    else if(this.selectedFirstUnit == 'EUR') {
      if(this.selectedSecondUnit == 'EUR') {
          this.sInput = this.fInput;
      } else if(this.selectedSecondUnit == 'USD') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*this.eurToUsd;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/this.eurToUsd;
        }
        
      } else if(this.selectedSecondUnit == 'VND') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*this.eurToVnd;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/this.eurToVnd;
        }

      }
    } 
    //VND Exchange
    else if(this.selectedFirstUnit == 'VND') {
      if(this.selectedSecondUnit == 'VND') {
        this.sInput = this.fInput;
      } else if(this.selectedSecondUnit == 'USD') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput/this.usdToVnd;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput*this.usdToVnd;
        }
        
      } else if(this.selectedSecondUnit == 'EUR') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput/this.eurToVnd;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput*this.eurToVnd;
        }

      }
    }
  }

}
