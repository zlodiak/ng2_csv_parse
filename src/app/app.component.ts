import { Component, OnInit } from '@angular/core';
import { RequestOptions } from '@angular/http';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { PapaParseService } from 'ngx-papaparse';
import { CsvService } from './services/csv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private csvStr: string = '';
	private csvArr: any[] = [];

	constructor(private papa: PapaParseService,
							private csvService: CsvService,
							private http: Http) {};

	ngOnInit() {
		this.getStrCsv();
	};

  private parseCsv(): void {
    this.papa.parse(this.csvStr,{
        complete: (results) => {
        	this.csvArr = results.data;
          //console.log(this.csvArr);
        }
    });
  };

  private getStrCsv(): void {
    this.csvService.getStr().subscribe(
      data => {   
        //console.log(data);
        this.csvStr = data['_body'];
        this.parseCsv();                                                            
      }, 
      err => {
        console.log('err')         
      });    
  };  

}
