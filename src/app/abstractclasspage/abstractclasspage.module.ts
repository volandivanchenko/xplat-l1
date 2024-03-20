import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractclasspagePageRoutingModule } from './abstractclasspage-routing.module';

import { AbstractclasspagePage } from './abstractclasspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstractclasspagePageRoutingModule
  ],
  declarations: [AbstractclasspagePage]
})
export class AbstractclasspagePageModule {}
