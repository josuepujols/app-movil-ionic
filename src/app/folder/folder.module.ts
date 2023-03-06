import { AgeModule } from './../age/age.module';
import { GenderModule } from './../gender/gender.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { UniversityModule } from '../university/university.module';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    GenderModule,
    AgeModule,
    UniversityModule,
    WeatherModule
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
