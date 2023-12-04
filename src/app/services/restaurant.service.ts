import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})


export class RestaurantService {
  
  constructor(private http: HttpClient,
    private router: Router) {}

    private itemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public items$: Observable<any[]> = this.itemsSubject.asObservable();
  

    private setItems(items: any[]): void {
      this.itemsSubject.next(items);
    }

    private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    public cartItems$ = this.cartItemsSubject.asObservable();

    addToCart(item: any): void {
      const currentCartItems = this.cartItemsSubject.value;
      this.cartItemsSubject.next([...currentCartItems, item]);
    }
  
    clearCart(): void {
      this.cartItemsSubject.next([]);
    }
  // getItems(): any{
  //   return this.restaurantIdSubject.value;
  // }


  getItemRestaurantId(restaurantId: string): Observable<any[]> {
    return this.http.get(`${base_url}/restaurant/getItemsPerRestaurant?restaurantId=${restaurantId}`)
      .pipe(
        tap((resp: any) => this.setItems(resp as any[])),  // Explicitly cast resp as any[]
      );
  }
  
}
