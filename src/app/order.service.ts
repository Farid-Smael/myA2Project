import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class OrderService implements OnInit {

	private _order_num: string;
	private _costumer: string;
	private _product: string;
	private _quantity: number;
	private _price: number;

	private _orderlist: object[] = []; // mon erruer ce fut ici

	constructor() {

		this._order_num = '123A00';
		this._costumer = 'Smael Check';
		this._product = 'PlayStation 4';
		this._quantity = 1;
		this._price = 300.99;

		this._orderlist.push({
			order_num: this._order_num,
			costumer: this._costumer,
			product: this._product,
			quantity: this._quantity,
			price: this._price
		});

		// before erase the data, i check if exist it in localstorage
		if (typeof localStorage.getItem('is_defined') === 'undefined') {
			localStorage.setItem('is_defined', 'true');
			this._save();
		}
		return this;
	}

	ngOnInit() {
	}

	addOrder(order: object) {

		// Add to order list object
		this._orderlist.push(order);

		// Call the save function to save into localstorage
		this._save();
		return this;
	}

	getOrderList() {

		this._restore();
		// return the collection
		return this._orderlist;
	}

	private _save() {

		// save on local storage
		localStorage.setItem("sc__orderlist", JSON.stringify(this._orderlist));
	}

	private _init() {

		localStorage.setItem("sc__orderlist", "null");
		return this;
	}

	private _restore() {

		// Restore all data from local storage database if get it
		if (localStorage.getItem('is_defined') === 'true') {

			// is true : empty the current values in collection
			this._orderlist = [];

			var arr = JSON.parse(localStorage.getItem("sc__orderlist"));

			// Right now , i fill the collection
			// with values from local storage
			for (var i = 0; i < arr.length; i++) {
				this._orderlist.push(arr[i]);
			}
		}
		return this;
	}

}

