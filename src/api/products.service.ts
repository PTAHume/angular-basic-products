import { Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError, map } from 'rxjs';
import IProduct from '../app/products/IProduct';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
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
        products.find((product) => product.productId === Id)
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
