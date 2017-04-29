import {Component, DoCheck} from "@angular/core";
import {OrderService} from "../../Services/order-service/order.service";

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.scss'],
	providers: [OrderService]
})
export class OrderListComponent implements DoCheck {

	public orderlist: object[] = []; // mon erruer ce fut ici

	constructor(private _os: OrderService) {
	}

	ngDoCheck() {
	  this.orderlist = this._os.getOrderList();
  }

}
