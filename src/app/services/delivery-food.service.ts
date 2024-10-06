import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryFoodService {
  private readonly apiUrl = 'http://localhost:3000'

  /**
   * Constructor
   */
  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Realiza a chamada dos produtos
   */
  public listInformations(): void {
    this.http.get(`${this.apiUrl}/products`).subscribe(resp =>
  console.log(resp)    
    )
  }
}
