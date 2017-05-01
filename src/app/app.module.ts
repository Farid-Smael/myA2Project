import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {OrderListComponent} from "./Components/order-list/order-list.component";
import {OrderFormComponent} from "./Components/order-form/order-form.component";
import {OrderPipe} from "./Pipes/order-pipe/order.pipe";
import {OrderService} from "./Services/order-service/order.service";




@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderFormComponent,
	OrderPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
	providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
