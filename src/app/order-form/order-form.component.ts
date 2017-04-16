import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

declare var $: any;
@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
	form: FormGroup;

  constructor(private fb: FormBuilder) {
	this.form = this.fb.group({
		order_num: '',
		costumer: '',
		product : '',
		quantity : '',
		price : ''
	});

  }

  ngOnInit() {
  }

  onSubmit(f: FormGroup){
  	console.log(f);
  }

	@ViewChild('order_num') order_num: ElementRef;
	@ViewChild('costumer') costumer: ElementRef;
	@ViewChild('product') product: ElementRef;
	@ViewChild('quantity') quantity: ElementRef;
	@ViewChild('price') price: ElementRef;


	ngDoCheck() {
		if (this.order_num.nativeElement.classList.contains('open')) {
			$(this).addClass('field-non-valid');
		}
	}

	private _save(data: FormGroup) {
		console.log(data);

	}

}
