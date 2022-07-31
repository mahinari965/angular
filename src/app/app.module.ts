import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    StarComponent,
    SampleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
