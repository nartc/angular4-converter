import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent implements OnInit {

  public fInput: number = 0;
  public cOutput: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onChange(e: any): void {
    if( e!=null ) {
      this.fInput = e;
    } else {
      this.fInput = 0;
    }

    this.cOutput = (this.fInput-32)* (5/9);
  }

}
