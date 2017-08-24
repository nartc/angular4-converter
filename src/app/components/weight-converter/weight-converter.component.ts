import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight-converter',
  templateUrl: './weight-converter.component.html',
  styleUrls: ['./weight-converter.component.css']
})
export class WeightConverterComponent implements OnInit {

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
        code: 'KG',
        name: 'Kilogram'
      },
      {
        code: 'GR',
        name: 'Gram'
      },
      {
        code: 'OZ',
        name: 'Ounce'
      },
      {
        code: 'LB',
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
    //Pound Exchange
    if(this.selectedFirstUnit == 'LB') {
      if(this.selectedSecondUnit == 'KG') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*0.453592;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/0.453592;
        }
        
      } else if(this.selectedSecondUnit == 'GR') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*453.592;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/453.592;
        }
        
      } else if(this.selectedSecondUnit == 'OZ') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*16;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/16;
        }

      } else if(this.selectedSecondUnit == 'LB') {
        this.sInput = this.fInput;
      }
    } 
    //Kilogram Exchange
    else if(this.selectedFirstUnit == 'KG') {
      if(this.selectedSecondUnit == 'KG') {
          this.sInput = this.fInput;
      } else if(this.selectedSecondUnit == 'GR') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*1000;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/1000;
        }
        
      } else if(this.selectedSecondUnit == 'OZ') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*35.274;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/35.274;
        }

      } else if(this.selectedSecondUnit == 'LB') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*2.20462;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/2.20462;
        }
      }
    } 
    //Gram Exchange
    else if(this.selectedFirstUnit == 'GR') {
      if(this.selectedSecondUnit == 'GR') {
        this.sInput = this.fInput;
      } else if(this.selectedSecondUnit == 'KG') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput/1000;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput*1000;
        }
        
      } else if(this.selectedSecondUnit == 'OZ') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*0.035274;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/0.035274;
        }

      } else if(this.selectedSecondUnit == 'LB') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*0.00220462;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/0.00220462;
        }
      }
    }
    //Ounce Exchange
    else if(this.selectedFirstUnit == 'OZ') {
      if(this.selectedSecondUnit == 'OZ') {
        this.sInput = this.fInput;
      } else if(this.selectedSecondUnit == 'KG') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput/0.0283495;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput*0.0283495;
        }
        
      } else if(this.selectedSecondUnit == 'GR') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*28.3495;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/28.3495;
        }

      } else if(this.selectedSecondUnit == 'LB') {
        if(this.changedFirstInput) {
          this.sInput = this.fInput*0.0625;
        }
        if(this.changedSecondInput) {
          this.fInput = this.sInput/0.0625;
        }
      }
    }
  }

}
