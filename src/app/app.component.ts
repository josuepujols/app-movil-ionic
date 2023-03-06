import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Gender', url: '/folder/Gender', icon: 'people' },
    { title: 'Age', url: '/folder/Age', icon: 'calendar' },
    { title: 'University', url: '/folder/University', icon: 'school' },
    { title: 'Weather', url: '/folder/Weather', icon: 'rainy' },
    { title: 'About', url: '/folder/About', icon: 'mail' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
