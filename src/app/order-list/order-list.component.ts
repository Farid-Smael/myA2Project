import {Component, OnInit} from "@angular/core";
import {OrderService} from "../order.service";

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.scss'],
	providers: [OrderService]
})
export class OrderListComponent implements OnInit {

	public orderlist: object[] = []; // mon erruer ce fut ici

	constructor(private _os: OrderService) {
	}

  ngOnInit() {
	  //console.log(this._os.getOrderList());
	  this.orderlist = this._os.getOrderList();
	  //console.log(this._os.getOrderList());
  }

}
