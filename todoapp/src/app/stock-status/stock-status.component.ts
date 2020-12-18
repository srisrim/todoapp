import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.scss']
})
export class StockStatusComponent implements OnInit {


  stockValue: any = null;

  @Input() stockCount: number;
  @Input() productId: number;
  @Output() stockChange = new EventEmitter();

  stockUpdate() {
    this.stockChange.emit({id: this.productId, updatedStock: this.stockValue});
    this.stockValue = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
