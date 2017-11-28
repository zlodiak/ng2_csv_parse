import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class CsvService {

  constructor(private http: Http) { };

  getStr(): Observable<any> {
  	let result = this.http.get('../assets/csv/2.csv');
  	return result;
  }; 

}
