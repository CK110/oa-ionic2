import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {PersonPage} from "./person";

@NgModule({
  declarations: [
    PersonPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonPage),
  ],
  exports: [
    PersonPage
  ]
})
export class PersonPagePageModule {}
