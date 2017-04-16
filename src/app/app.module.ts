import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderFormComponent} from "./order-form/order-form.component";
import {OrderPipe} from "./order.pipe";

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderFormComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
