import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {

  invoicecform = new FormGroup({
    customerName : new FormControl(''),
    productName : new FormControl(''),
    price : new FormControl(0)

  })
  submitInvoice(){
    let tempinvoice = { customerName: this.invoicecform.value.customerName,
      productName: this.invoicecform.value.productName,
      price: this.invoicecform.value.price
    }
    console.log(tempinvoice);
  }
}
