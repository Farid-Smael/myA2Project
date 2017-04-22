import {Component, ElementRef, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../order.service";

// The jQuery library
declare var $: any;

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent {

	// Declarate the FormGroup
	f: FormGroup;

	constructor(private fb: FormBuilder, private _os: OrderService) {
		this.f = this.fb.group({
			order_num: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])],
			costumer: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
			product: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
			quantity: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])],
			price: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(6)])]
		});
	}

	onSubmit(f: FormGroup) {

		this._os.addOrder({
			'order_num': f.get('order_num').value,
			'costumer': f.get('costumer').value,
			'product': f.get('product').value,
			'quantity': f.get('quantity').value,
			'price': f.get('price').value
		});
	}

	@ViewChild('order_num') order_num: ElementRef;
	@ViewChild('costumer') costumer: ElementRef;
	@ViewChild('product') product: ElementRef;
	@ViewChild('quantity') quantity: ElementRef;
	@ViewChild('price') price: ElementRef;
}
