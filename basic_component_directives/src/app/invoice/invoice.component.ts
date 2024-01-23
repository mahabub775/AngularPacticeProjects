import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGroup, FormControl, ReactiveFormsModule, Validators  } from '@angular/forms';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule ],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {


  invoicecform = new FormGroup({
    id : new FormControl(0),
    customerName : new FormControl('', Validators.required),
    productName : new FormControl('', Validators.required),
    price : new FormControl(0, Validators.required)

  })
  Invoices:any =[]
  constructor(){
     this.Invoices = [{id:1, customerName:'Customer-A', productName:'Mobile',price: 1500}];  
  }
  submitInvoice(){
    let tempinvoice = { 
      id:this.Invoices.length+1,
      customerName: this.invoicecform.value.customerName,
      productName: this.invoicecform.value.productName,
      price: this.invoicecform.value.price
    }
    //console.log(tempinvoice);
    this.Invoices.push(tempinvoice);
    this.Reset();
  }
  Delete(obj:any){

    var otempObjs =  this.Invoices.filter( (element: any) => element != obj);
    this.Invoices = otempObjs;

  }
  Reset(){
    this.invoicecform = new FormGroup({
      id : new FormControl(0),
      customerName : new FormControl(''),
      productName : new FormControl(''),
      price : new FormControl(0)
  
    })
  }
}
