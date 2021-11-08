import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url:string = '/api/v1/users'
  constructor(private http: HttpClient) {
    console.log('Services Working')
   }

   getUsers(): Observable<any>{
    return this.http.get(this._url);
  }

  saveUserDB(body:any): Observable<any>{
    return this.http.post(this._url, body);
  }

  deleteUserDB(id: string): Observable<any>{
    this._url = `${this._url}/${id}`
    return this.http.delete(this._url);
  }
}




// AQUÍ NOS COMUNICAMOS CON LA API