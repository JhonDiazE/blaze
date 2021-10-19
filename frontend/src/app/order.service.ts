import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }



  findAll(): Observable<any> {
    const url =  'http://localhost:8080/order/';
    return this.http.get<Order[]>(url).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }
}
