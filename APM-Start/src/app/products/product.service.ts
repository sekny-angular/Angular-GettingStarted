import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable()

export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private _http: HttpClient){

  }
  getProducts(): Observable<IProduct[]> {
      return this._http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }else{
      errorMessage = `Server return code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
