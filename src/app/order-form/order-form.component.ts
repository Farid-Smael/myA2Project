import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import{ FormBuilder , FormGroup , FormControl } from '@angular/forms';

declare var jQuery : any;
@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
	form: FormGroup;

  constructor(private fb: FormBuilder) {
	this.form = this.fb.group({
		num_commande: '',
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

	@ViewChild('input') input: ElementRef;

	ngAfterViewInit() {
		console.log(jQuery(this.input.nativeElement));
		jQuery(this.input.nativeElement).css({
			'box-shadow':'2px 2px 3px cyan'
		});
	}

	private _save(){

	}

}
