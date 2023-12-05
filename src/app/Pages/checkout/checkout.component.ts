import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { RestaurantService } from 'src/app/services/restaurant.service';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) {}

   cartItems$ = this.restaurantService.cartItems$

  public total = 0;

  ngOnInit(): void {
    this.cartItems$.forEach(element => {
      element.forEach(el=>this.total = +el.price + this.total)
    });
  }

}
