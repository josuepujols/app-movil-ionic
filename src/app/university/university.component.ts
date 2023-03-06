import { UniversityResponse } from './../../models/university-response';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss'],
})
export class UniversityComponent  implements OnInit {

  public country: string;
  public universities: UniversityResponse[];

  constructor( private http: HttpClient ) {
    this.country = "";
    this.universities = [];
  }

  ngOnInit() {}

  public GetUniversities() {
    const httpresult = this.http.get<UniversityResponse[]>(`http://universities.hipolabs.com/search?country=${this.country}`);
    httpresult.subscribe(
      data => {
        this.universities = data;
        console.log(this.universities)
      }
    );
  }

}
