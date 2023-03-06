import { GenderReponse } from './../../models/gender-response';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent  implements OnInit {

  public name: string;
  public response: GenderReponse;

  constructor(private http: HttpClient) {
    this.name = "";
    this.response = {
      gender: "",
      name: ""
    };
  }

  ngOnInit() {}

  public IsMaleOrFemale() {
    const httpresult = this.http.get<GenderReponse>(`https://api.genderize.io/?name=${this.name}`);
    httpresult.subscribe(
      data => {
        this.response.gender = data.gender;
        this.response.name = data.name;
      }
    );
  }

}
