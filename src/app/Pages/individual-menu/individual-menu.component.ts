import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-individual-menu',
  templateUrl: './individual-menu.component.html',
  styleUrls: ['./individual-menu.component.css']
})
  
export class IndividualMenuComponent implements OnInit {


  constructor(private restaurantService: RestaurantService) {
    
    console.log(this.items);
   }
   
  ngOnInit(): void {
  }

  items = this.restaurantService.items$
  cartItems$ = this.restaurantService.cartItems$;

  addToCart(item: any): void {
    this.restaurantService.addToCart(item);
  }


}
