export interface WeatherResponse {
  current: CurrentWeather;
}

interface CurrentWeather {
  temp_c: number;
  temp_f: number;
}
