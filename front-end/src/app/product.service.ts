import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from './product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }



  findAll(): Observable<any> {
    const url =  'http://localhost:8080/product/';
    return this.http.get<Product[]>(url).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

  save(request: Product): Observable<any> {
    const url =  'http://localhost:8080/product/';
    return this.http.post<Product>(url, request).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }



}
