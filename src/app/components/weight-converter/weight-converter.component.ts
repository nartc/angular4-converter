import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight-converter',
  templateUrl: './weight-converter.component.html',
  styleUrls: ['./weight-converter.component.css']
})
export class WeightConverterComponent implements OnInit {

  public lbsInput: number = 0;
  public kgsOutput: number = 0;
  public grsOutput: number = 0;
  public ozOutput: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onChange(e: any): void {
    if(e != null) {
      this.lbsInput = e;
    } else {
      this.lbsInput = 0;
    }

    this.kgsOutput = this.lbsInput/2.2046;
    this.grsOutput = this.lbsInput/0.0022046;
    this.ozOutput = this.lbsInput*16;
  }

}
