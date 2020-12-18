import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimalpipe',
  templateUrl: './decimalpipe.component.html',
  styleUrls: ['./decimalpipe.component.scss'],
  providers: [DecimalPipe]
})
export class DecimalpipeComponent implements OnInit {

  decimal_value = 1000000;
  another_decimal_value: number = 1.234567890;

  constructor(private decimalPipe: DecimalPipe) { }

  ngOnInit() {
  }

  private getFormatedNumber() {
    return this.decimalPipe.transform(this.decimal_value);
  }

}
