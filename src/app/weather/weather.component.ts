import { WeatherResponse } from './../../models/weather-response';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent  implements OnInit {

  public weatherResponse: WeatherResponse;

  constructor( private http: HttpClient ) {
    this.weatherResponse = {
      current: {
        temp_c: 0,
        temp_f: 0
      }
    };
  }

  ngOnInit() { this.GetCurrentWeather(); }

  public GetCurrentWeather() {
    const httpresult = this.http.get<WeatherResponse>("https://api.weatherapi.com/v1/current.json?key=abe5e55aa70540189d9164724230503&q=Santo Domingo&aqi=no");
    httpresult.subscribe(
      data => {
        this.weatherResponse.current.temp_c = data.current.temp_c;
        this.weatherResponse.current.temp_f = data.current.temp_f;
      }
    );
  }

}
