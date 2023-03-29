import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

//Q3 -shared service
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    //Q1 -http client and Q2 - passing data to server using route params
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(retry(3), catchError(this.handleError));
  }

  handleError(error: any): ObservableInput<any> {
    console.log('Error: ', error);
    return of(0);
  }


}
