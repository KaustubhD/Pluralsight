import { IProducts } from "./products";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductListService{

  private ProductURL = 'api/products/products.json'

  constructor(private http: HttpClient){}

  getProducts(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.ProductURL).pipe(
      tap(data => console.log('All > ' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = ''
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured : ${err.error.message}`
    }
    else{
      errorMessage = `Server sent code ${err.status}. Message is ${err.error.message}`
    }
    console.error(errorMessage)
    return throwError(errorMessage)
  }
}