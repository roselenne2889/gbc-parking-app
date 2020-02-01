import { Injectable } from "@angular/core";
import { User, UserLogin } from "./user";
import { Admin } from "./admin";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  endpoint: string = "http://localhost:4000/api";
  // endpointUser: string = "/api-user";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  //Add User
  AddUser(data: any): Observable<any> {
    let API_URL = `${this.endpoint}/user-signup`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      //get client side error
      errorMessage = error.error.message;
    } else {
      //get server side error
      errorMessage = `Error Code:${error.status}\nMessage:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  //User login
  Login(data: UserLogin): Observable<any> {
    const API_URL = `${this.endpoint}/login`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }

  SetUserLoginSession() {
    window.sessionStorage.setItem("isLoggedIn", "true");
  }
}
