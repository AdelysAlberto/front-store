import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  private url: string = "http://localhost:3000/list";

  constructor(private http: HttpClient) {
  }

  getMotos() {
    this.http.get(this.url).pipe(tap((res:HttpResponse)  => console.log(res)));
  }

}
