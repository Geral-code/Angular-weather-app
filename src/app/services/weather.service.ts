import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey ='f6c378d005e69cba4f7d14b9d3f84060'
  URL: string = '';

  constructor(private http: HttpClient){

    this.URL =  `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}`

   }

   getWeather(cityName: string, countryCode: string): Observable<any> {
    return this.http.get(`${this.URL}${cityName}${countryCode}`);

   }

 }
