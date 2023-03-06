import { AgeResponse } from './../../models/age-response';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss'],
})
export class AgeComponent  implements OnInit {

  public name: string;
  public response: AgeResponse;

  constructor(private http: HttpClient) {
    this.name = "";
    this.response = {
      age: 0,
      name: ""
    };
  }

  ngOnInit() {}

  public GuessAge() {
    const httpresult = this.http.get<AgeResponse>(`https://api.agify.io/?name=${this.name}`);
    httpresult.subscribe(
      data => {
        this.response.age = data.age;
        this.response.name = data.name;
        console.log(this.response)
      }
    );
  }

}
