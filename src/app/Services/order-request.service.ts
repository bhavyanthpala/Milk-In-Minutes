import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderRequestService {
URL: string="http://localhost:3000/requests"

  constructor(private http: HttpClient) { }

  getAllOrderReqeusts() : Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.URL}`);
  }

  saveOrderRequest(tourRequest? : User) : Observable<User> {
    return this.http.post<User>(`${this.URL}`, tourRequest)
  }
}
