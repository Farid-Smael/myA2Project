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

		this._save();
	}

	ngOnInit() {


	}

	/*
	 * @param : order
	 * @type : object
	 * */
	addOrder(order: object) {
		// Add to order list object
		//console.log(order);
		this._orderlist.push(order);
		//console.log(this.orderlist);
		this._save();
	}

	/*
	 * */
	getOrderList() {

		// Restore all data from local storage database if get it
		if (localStorage.getItem("sc__orderlist") != null) {

			// is True, i remove the current values in collection
			this._orderlist = [];

			// Right now , i fill the collection
			var arr = this._restore();
			console.log(arr); // debug
			arr.forEach(function (elem) {
				//console.log(elem);
				this._orderlist.push(elem); // erreur ici
			});

		}
		else {
			this._init();
		}

		// return the collection
		return this._orderlist;
	}

	private _save() {
		// save on local storage
		//console.log(JSON.stringify(this.orderlist));
		localStorage.setItem("sc__orderlist", JSON.stringify(this._orderlist));
	}

	private _init() {
		localStorage.setItem("sc__orderlist", "null");
	}

	private _restore() {
		this._orderlist = [];
		return JSON.parse(localStorage.getItem("sc__orderlist"));
	}

}

