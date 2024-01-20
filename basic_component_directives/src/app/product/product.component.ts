import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent  implements OnInit {

 productList  :any=[{ id:0,  name: "Product-1",  price: "$ 10 " }];
 bindingvalue= "Type & see magic";
constructor(private router:Router){


}
ngOnInit(): void 
{
  for (let index = 0; index < 10; index++) 
  {
    //alert(index);
    let oProduct =  { id: index+1, name: "Product "+index,  price: "$"+index*index };
      this.productList.push(oProduct);
  }
}


navigateInvoice(): void {
  //alert('hellow');
  this.router.navigate(['/invoice']); // Navigate to the destination page
}

}
