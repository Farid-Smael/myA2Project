import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {


	private order_num: string;
	private costumer: string;
	private product: string;
	private quantity: number;
	private price: number;

	public orderlist: object[] = [];// mon erruer ce fut ici

	constructor() {
	}

  ngOnInit() {

	  this.order_num = '123A00';
	  this.costumer = 'Smael Check';
	  this.product = 'PlayStation 4';
	  this.quantity = 1;
	  this.price = 300.99;

	  this.orderlist.push({
		  order_num: this.order_num,
		  costumer: this.costumer,
		  product: this.product,
		  quantity: this.quantity,
		  price: this.price
	  });

  }

}
