import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent implements OnInit {

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

  constructor() {
    this.units = 
    [
      {
        code: 'Fahrenheit',
        name: '°F'
      },
      {
        code: 'Celsius',
        name: '°C'
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
    //°C Exchange
    if(this.selectedFirstUnit == 'Celsius') {
      if(this.selectedSecondUnit == 'Fahrenheit') {
        if(this.changedFirstInput) {
          this.sInput = (this.fInput/.5556) + 32;
        }
        if(this.changedSecondInput) {
          this.fInput = (this.sInput - 32) * .5556;
        }
        
      } else if(this.selectedSecondUnit == 'Celsius') {
        this.sInput = this.fInput;
      }
    } 
    //°F Exchange
    else if(this.selectedFirstUnit == 'Fahrenheit') {
      if(this.selectedSecondUnit == 'Fahrenheit') {
          this.sInput = this.fInput;
      } else if(this.selectedSecondUnit == 'Celsius') {
        if(this.changedFirstInput) {
          this.sInput = (this.fInput - 32) * .5556;
        }
        if(this.changedSecondInput) {
          this.fInput = (this.sInput/.5556) + 32;
        }
      }
    }
  }

}
