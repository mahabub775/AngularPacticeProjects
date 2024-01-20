import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { InvoiceComponent } from './invoice/invoice.component';

export const routes: Routes = [
    {path:'product', component: ProductComponent },
    {path:'invoice', component: InvoiceComponent }
];
