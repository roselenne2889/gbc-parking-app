import { Injectable } from "@angular/core";
import { User, UserLogin } from "./user";
import { UserComment } from "./user-comment";
import { Admin, AdminLogin } from "./admin";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse
} from "@angular/common/http";
import { Lot } from "./lot";
import { Reservation } from "./reservation";
import { ReservationRequest } from "./reservation-request";

export interface UserGBCNumber {
    gbc_number: number;
}

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

    //Add comment
    AddComment(data: any): Observable<any> {
        const API_URL = `${this.endpoint}/comment/submit-comment`;
        return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
    }

    //Admin login
    AdminLogin(data: AdminLogin): Observable<any> {
        const API_URL = `${this.endpoint}/admin/login`;
        return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
    }

    // Get users
    GetAllUsers(): Observable<any> {
        const API_URL = `${this.endpoint}`;
        return this.http.get(API_URL).pipe(catchError(this.errorMgmt));
    }

    // Get single user
    GetUser(data: any): Observable<any> {
        const API_URL = `${this.endpoint}/read-user`;
        return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
    }

    // Get all comments
    GetAllComments(): Observable<any> {
        const API_URL = `${this.endpoint}/all-comments`;
        return this.http.get(API_URL).pipe(catchError(this.errorMgmt));
    }

    // Get spots that are taken
    GetTakenSpots(data: Lot): Observable<any> {
        const API_URL = `${this.endpoint}/lot/get-taken`;
        return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
    }

    // Create (and update) reservation
    CreateReservation(data: ReservationRequest): Observable<any> {
        const API_URL = `${this.endpoint}/create-reservation`;
        return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
    }

    // Delete reservation
    DeleteReservation(data: UserGBCNumber): Observable<any> {
        const API_URL = `${this.endpoint}/delete-reservation`;
        return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
    }

    SetUserLoginSession() {
        window.sessionStorage.setItem("isLoggedIn", "true");
    }

    SetAdminLoginSession() {
        window.sessionStorage.setItem("isLoggedIn", "true");
    }
}
