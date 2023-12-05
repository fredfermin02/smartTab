import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
  }

  toMenuPage(id: string){
    this.restaurantService.getItemRestaurantId(id).subscribe({
      next: (resp)=>{
        
      }
    })
    this.router.navigateByUrl('/menu')
  }



}
