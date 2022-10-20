import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError, map } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import IProduct from '../app/products/IProduct';

@Injectable({
  providedIn: 'root',
})
export default class ProductService {
  deleteProduct(id: number) {
    throw new Error('Method not implemented.');
  }
  updateProduct(product: IProduct) {
    throw new Error('Method not implemented.');
  }
  createProduct(product: IProduct) {
    throw new Error('Method not implemented.');
  }
  apiURL: string = 'api/products/products.json';

  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiURL).pipe(
      tap((data: any) => console.log('Data: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getProductById(Id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) =>
        products.find((product) => product.id === Id)
      )
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server return code: ${err.error.status}, error message is: ${err.error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
