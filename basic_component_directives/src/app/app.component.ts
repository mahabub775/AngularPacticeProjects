import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router:Router){}
  title = 'Basic Practice of Angular';
  name = "mahabub";
  buttonName = "Product c";



  navigateProduct(): void {
    //alert('hellow');
    this.router.navigate(['/product']); // Navigate to the destination page
  }
 
  
}
