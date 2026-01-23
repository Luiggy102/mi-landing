import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { PortfolioData } from '../interfaces/portfolio-data.interface';


@Injectable({ providedIn: 'root' })
export class DataService {
     private readonly API_URL = 'https://tu-api.execute-api.us-east-1.amazonaws.com/prod/data';
     private data$?: Observable<PortfolioData>;

     constructor(private http: HttpClient) { }

     getPortfolioData(): Observable<PortfolioData> {
          if (!this.data$) {
               this.data$ = this.http.get<PortfolioData>(this.API_URL).pipe(
                    shareReplay(1)
               );
          }
          return this.data$;
     }
}