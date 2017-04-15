import { Component } from '@angular/core';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderFormComponent} from './order-form/order-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon projet de commandes de produits.';
}
